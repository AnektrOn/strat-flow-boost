import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { computeSynapseMorph, SYNAPSE_ETAT_3 } from "./synapseMorphStates";
import { rebuildSynapseLineSegments } from "./synapseConnections";
import { getSynapseRenderProfile, isWebGLAvailable } from "./synapsePerformance";
import type { SynapseMorphAnchors } from "./synapseRouteConfig";
import { buildHelixNode, SYNAPSE_MAX_PARTICLES } from "./synapseShapeBuilders";
import {
  getResponsiveCameraForState,
  getHeroCameraDistance,
  getHeroGroupScale,
  getMethodGroupScale,
  HELIX_SHAPE,
  HERO_ZOOM_HOLD,
  METHOD_SCALE_START,
  getSynapseCameraDistance,
  getSynapseCameraFov,
  getSynapseViewportTier,
  getHubSynapseFocalOffset,
  getMethodCameraPullback,
  getMethodLookYOffset,
} from "./synapseViewport";
import { getProtocolSynapseFraming } from "./synapseViewportFraming";
import type { SynapseSettings } from "./synapseSettings";

type NeuralSynapseCanvasProps = {
  settingsRef: React.MutableRefObject<SynapseSettings>;
  className?: string;
  paused?: boolean;
  morphAnchors: SynapseMorphAnchors;
  routeKey?: string;
  hubFocal?: boolean;
  alignRight?: boolean;
};

export function NeuralSynapseCanvas({
  settingsRef,
  className,
  paused = false,
  morphAnchors,
  routeKey = "",
  hubFocal = false,
  alignRight = false,
}: NeuralSynapseCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(paused);
  const anchorsRef = useRef(morphAnchors);
  const hubFocalRef = useRef(hubFocal);
  const alignRightRef = useRef(alignRight);
  const morphResetPendingRef = useRef(true);
  pausedRef.current = paused;
  anchorsRef.current = morphAnchors;
  hubFocalRef.current = hubFocal;
  alignRightRef.current = alignRight;

  useEffect(() => {
    morphResetPendingRef.current = true;
  }, [routeKey]);
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    if (!isWebGLAvailable()) {
      setWebglFailed(true);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const fog = new THREE.FogExp2(0x020202, 0.0018);
    scene.fog = fog;

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);

    const applyViewportCamera = (width: number) => {
      const tier = getSynapseViewportTier(width);
      camera.fov = getSynapseCameraFov(tier);
      camera.position.z = getSynapseCameraDistance(tier);
      camera.updateProjectionMatrix();
      return tier;
    };

    let currentTier = applyViewportCamera(container.clientWidth || window.innerWidth);

    let profile = getSynapseRenderProfile(currentTier);
    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: false,
        antialias: profile.antialias,
        powerPreference: "high-performance",
      });
    } catch {
      setWebglFailed(true);
      return;
    }

    const syncRendererSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (w <= 0 || h <= 0) return;

      const tier = getSynapseViewportTier(w);
      if (tier !== currentTier) {
        currentTier = tier;
        Object.assign(profile, getSynapseRenderProfile(tier));
        renderer.setPixelRatio(profile.pixelRatio);
      }

      camera.aspect = w / h;
      applyViewportCamera(w);
      renderer.setSize(w, h, true);
    };

    renderer.setPixelRatio(profile.pixelRatio);
    renderer.setClearColor(0x020202, 1);
    syncRendererSize();
    const canvasEl = renderer.domElement;
    canvasEl.style.display = "block";
    canvasEl.style.width = "100%";
    canvasEl.style.height = "100%";
    requestAnimationFrame(() => syncRendererSize());
    container.appendChild(canvasEl);

    const particlesGroup = new THREE.Group();
    scene.add(particlesGroup);

    const particleGeometry = new THREE.BufferGeometry();
    const lineGeometry = new THREE.BufferGeometry();

    const particleMaterial = new THREE.PointsMaterial({
      size: settingsRef.current.particleSize,
      blending: THREE.AdditiveBlending,
      transparent: true,
      vertexColors: true,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    particlesGroup.add(particles);
    particlesGroup.add(lines);

    let shape1 = new Float32Array(0);
    let shape2 = new Float32Array(0);
    let shape3 = new Float32Array(0);
    const phases = new Float32Array(SYNAPSE_MAX_PARTICLES);
    let nodeColors = new Float32Array(0);

    const rebuildSynapse = () => {
      const settings = settingsRef.current;
      const count = SYNAPSE_MAX_PARTICLES;

      const positions = new Float32Array(count * 3);
      nodeColors = new Float32Array(count * 3);
      shape1 = new Float32Array(count * 3);
      shape2 = new Float32Array(count * 3);
      shape3 = new Float32Array(count * 3);

      const colorCenter = new THREE.Color(settings.colorCenter);
      const colorEdges = new THREE.Color(settings.colorEdges);
      const scratch = new THREE.Vector3();

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const radius1 = 100 * Math.pow(Math.random(), 1.5);
        const theta1 = Math.random() * 2 * Math.PI;
        const phi1 = Math.acos(Math.random() * 2 - 1);

        const x1 = radius1 * Math.sin(phi1) * Math.cos(theta1);
        const y1 = radius1 * Math.sin(phi1) * Math.sin(theta1);
        const z1 = radius1 * Math.cos(phi1);

        shape1[i3] = x1;
        shape1[i3 + 1] = y1;
        shape1[i3 + 2] = z1;

        scratch.set(x1, y1, z1).normalize();
        const scatterDist = radius1 + 30 + Math.random() * 50;
        shape2[i3] = scratch.x * scatterDist;
        shape2[i3 + 1] = scratch.y * scatterDist;
        shape2[i3 + 2] = scratch.z * scatterDist;

        const targetPos3 = buildHelixNode(i, SYNAPSE_ETAT_3.particleCount, {
          height: HELIX_SHAPE.height,
          radius: HELIX_SHAPE.radius,
          turns: HELIX_SHAPE.turns,
        });
        shape3[i3] = targetPos3.x;
        shape3[i3 + 1] = targetPos3.y;
        shape3[i3 + 2] = targetPos3.z;

        positions[i3] = x1;
        positions[i3 + 1] = y1;
        positions[i3 + 2] = z1;

        phases[i] = Math.random() * Math.PI * 2;

        const distRatio = Math.min(radius1 / 100, 1);
        const nodeColor = colorCenter.clone().lerp(colorEdges, distRatio);
        nodeColors[i3] = nodeColor.r;
        nodeColors[i3 + 1] = nodeColor.g;
        nodeColors[i3 + 2] = nodeColor.b;
      }

      particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));

      const maxLines = (count * (count - 1)) / 2;
      lineGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(maxLines * 6), 3));
      lineGeometry.setAttribute("color", new THREE.BufferAttribute(new Float32Array(maxLines * 6), 3));

      particleMaterial.size = settings.particleSize;
      particleGeometry.setDrawRange(0, SYNAPSE_MAX_PARTICLES);
    };

    rebuildSynapse();

    const resizeObserver = new ResizeObserver(() => syncRendererSize());
    resizeObserver.observe(container);

    const handleWindowResize = () => syncRendererSize();
    window.addEventListener("resize", handleWindowResize);

    let animationFrameId = 0;
    let time = 0;
    let frameCount = 0;
    let lastLineIdx = 0;
    let tabVisible = !document.hidden;
    let prevSettings = { ...settingsRef.current };
    let mouseX = 0;
    let mouseY = 0;

    const heroCam = getResponsiveCameraForState("hero", { x: 60, y: 0, z: 0 });
    const initialTier = getSynapseViewportTier();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smooth = {
      morph: 0,
      shapeT12: 0,
      shapeT23: 0,
      t12: 0,
      t23: 0,
      activeCount: 100,
      connectionDistance: 30,
      particleSize: 1.1,
      rotationBias: 0,
      cameraX: heroCam.x,
      cameraY: heroCam.y,
      cameraZ: heroCam.z,
      groupScale: getHeroGroupScale(initialTier),
    };
    const MORPH_SMOOTH = reducedMotion ? 0.12 : 0.055;
    const motionScale = reducedMotion ? 0.15 : 1;

    const handleVisibility = () => {
      tabVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const handleMouseMove = (e: MouseEvent) => {
      if (!profile.mouseParallax) return;
      mouseX = e.clientX - window.innerWidth / 2;
      mouseY = e.clientY - window.innerHeight / 2;
    };

    if (profile.mouseParallax) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    const lookTarget = new THREE.Vector3();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (pausedRef.current || !tabVisible) return;

      frameCount++;

      const morph = computeSynapseMorph(anchorsRef.current);
      const panel = settingsRef.current;
      const effective: SynapseSettings = { ...panel, ...morph.settings };

      if (morphResetPendingRef.current) {
        smooth.morph = morph.morph;
        smooth.shapeT12 = morph.shapeT12;
        smooth.shapeT23 = morph.shapeT23;
        smooth.t12 = morph.t12;
        smooth.t23 = morph.t23;
        smooth.activeCount = morph.activeParticleCount;
        smooth.connectionDistance = effective.connectionDistance;
        smooth.particleSize = effective.particleSize;
        smooth.rotationBias = morph.rotationBias;
        smooth.cameraX = morph.camera.x;
        smooth.cameraY = morph.camera.y;
        smooth.cameraZ = morph.camera.z;
        morphResetPendingRef.current = false;
      }

      const morphDelta = Math.abs(morph.morph - smooth.morph);
      const smoothFactor = morphDelta > 0.35 ? 0.18 : MORPH_SMOOTH;

      smooth.morph += (morph.morph - smooth.morph) * smoothFactor;
      smooth.shapeT12 += (morph.shapeT12 - smooth.shapeT12) * MORPH_SMOOTH;
      smooth.shapeT23 += (morph.shapeT23 - smooth.shapeT23) * MORPH_SMOOTH;
      smooth.t12 += (morph.t12 - smooth.t12) * MORPH_SMOOTH;
      smooth.t23 += (morph.t23 - smooth.t23) * MORPH_SMOOTH;
      smooth.activeCount += (morph.activeParticleCount - smooth.activeCount) * MORPH_SMOOTH;
      smooth.connectionDistance += (effective.connectionDistance - smooth.connectionDistance) * MORPH_SMOOTH;
      smooth.particleSize += (effective.particleSize - smooth.particleSize) * MORPH_SMOOTH;
      smooth.rotationBias += (morph.rotationBias - smooth.rotationBias) * MORPH_SMOOTH;
      smooth.cameraX += (morph.camera.x - smooth.cameraX) * MORPH_SMOOTH;
      smooth.cameraY += (morph.camera.y - smooth.cameraY) * MORPH_SMOOTH;
      smooth.cameraZ += (morph.camera.z - smooth.cameraZ) * MORPH_SMOOTH;

      if (tabVisible) {
        time += 0.01 * panel.speed * motionScale;
      }

      if (prevSettings.colorCenter !== panel.colorCenter || prevSettings.colorEdges !== panel.colorEdges) {
        rebuildSynapse();
        prevSettings = { ...panel };
      }

      const activeCount = Math.round(smooth.activeCount);
      const morphProgress = smooth.morph;
      const tier = getSynapseViewportTier();
      const heroWeight = Math.max(0, 1 - morphProgress / HERO_ZOOM_HOLD);
      const methodWeight = Math.max(0, Math.min(1, (morphProgress - METHOD_SCALE_START) / (1 - METHOD_SCALE_START)));

      let targetGroupScale = 1;
      if (morphProgress < 0.5) {
        targetGroupScale = getHeroGroupScale(tier) + (1 - getHeroGroupScale(tier)) * (morphProgress / 0.5);
      } else {
        targetGroupScale = 1 + (getMethodGroupScale(tier) - 1) * methodWeight;
      }

      smooth.groupScale += (targetGroupScale - smooth.groupScale) * MORPH_SMOOTH;
      particlesGroup.scale.setScalar(smooth.groupScale);

      const restCamDist = getSynapseCameraDistance(tier);
      const heroCamDist = getHeroCameraDistance(tier);
      const methodPullback =
        morphProgress > 0.5
          ? getMethodCameraPullback(tier) * Math.min(1, (morphProgress - 0.5) * 2)
          : 0;
      const methodLookY =
        morphProgress > 0.55
          ? getMethodLookYOffset(tier) * Math.min(1, (morphProgress - 0.55) / 0.45)
          : 0;
      camera.position.z = restCamDist + (heroCamDist - restCamDist) * heroWeight + methodPullback;
      camera.updateProjectionMatrix();

      const isTransitioning =
        Math.abs(morph.morph - smooth.morph) > 0.02 ||
        Math.abs(morph.activeParticleCount - smooth.activeCount) > 8;

      particlesGroup.position.set(smooth.cameraX, smooth.cameraY, smooth.cameraZ);

      if (hubFocalRef.current) {
        const focal = getHubSynapseFocalOffset(tier);
        const focalWeight = Math.max(0, 1 - morphProgress * 1.35);
        particlesGroup.position.x += focal.x * focalWeight;
        particlesGroup.position.y += focal.y * focalWeight;
        particlesGroup.position.z += focal.z * focalWeight;
      }

      const lookBaseX = particlesGroup.position.x;
      const lookBaseY = particlesGroup.position.y;
      const lookBaseZ = particlesGroup.position.z;

      const rightMorph =
        morphProgress >= 0.5
          ? Math.max(0, Math.min(1, (smooth.shapeT23 - 0.15) / 0.85))
          : Math.max(0, Math.min(1, morphProgress / 0.5)) * 0.35;

      if (alignRightRef.current) {
        const camDist = camera.position.z;
        const framing = getProtocolSynapseFraming({
          viewportWidth: window.innerWidth,
          viewportHeight: window.innerHeight,
          cameraDistance: camDist,
          fovDeg: camera.fov,
          morphT: rightMorph,
        });
        particlesGroup.position.x += framing.offsetX;
      }

      lookTarget.set(lookBaseX, lookBaseY + methodLookY, lookBaseZ);

      const dynamicRotation = (panel.rotationSpeed + Math.sin(morphProgress * Math.PI) * 0.015) * motionScale;
      const helixRotationScale = morphProgress >= 0.5 ? 1 - smooth.shapeT23 * 0.7 : 1;
      particlesGroup.rotation.y += dynamicRotation * helixRotationScale;
      particlesGroup.rotation.x =
        panel.rotationSpeed * (smooth.rotationBias * 5) * motionScale * helixRotationScale;

      const positionAttr = particleGeometry.attributes.position;
      if (positionAttr && shape1.length > 0) {
        const pPos = positionAttr.array as Float32Array;
        const useShape12 = morphProgress < 0.5;
        const blendT = useShape12 ? smooth.shapeT12 : smooth.shapeT23;
        const helixForm = useShape12 ? 1 : smooth.shapeT23;
        const srcA = useShape12 ? shape1 : shape2;
        const srcB = useShape12 ? shape2 : shape3;
        const invT = 1 - blendT;

        for (let i = 0; i < activeCount; i++) {
          const i3 = i * 3;
          const bx = srcA[i3] * invT + srcB[i3] * blendT;
          const by = srcA[i3 + 1] * invT + srcB[i3 + 1] * blendT;
          const bz = srcA[i3 + 2] * invT + srcB[i3 + 2] * blendT;

          const wobble =
            Math.sin(time + phases[i]) * 2 * panel.speed * (0.15 + 0.85 * helixForm) * motionScale;

          pPos[i3] = bx + bx * 0.01 * wobble;
          pPos[i3 + 1] = by + by * 0.01 * wobble;
          pPos[i3 + 2] = bz + bz * 0.01 * wobble;
        }

        for (let i = activeCount; i < SYNAPSE_MAX_PARTICLES; i++) {
          const i3 = i * 3;
          pPos[i3] = 99999;
          pPos[i3 + 1] = 99999;
          pPos[i3 + 2] = 99999;
        }

        positionAttr.needsUpdate = true;
      }

      const linePosAttr = lineGeometry.attributes.position;
      const lineColAttr = lineGeometry.attributes.color;
      const heavyMorph = morphProgress >= profile.heavyMorphThreshold;
      const lineInterval =
        heavyMorph && activeCount > 250 ? profile.lineUpdateInterval : 1;
      const shouldRebuildLines = frameCount % lineInterval === 0;

      if (shouldRebuildLines && linePosAttr && lineColAttr && positionAttr) {
        const pPos = positionAttr.array as Float32Array;
        const lPos = linePosAttr.array as Float32Array;
        const lCol = lineColAttr.array as Float32Array;

        const helixForm = morphProgress >= 0.5 ? smooth.shapeT23 : 1;
        let reachScale = 1;
        if (morphProgress < 0.5) {
          reachScale = 0.55 + 0.45 * smooth.shapeT12;
        } else {
          reachScale = 0.35 + 0.65 * helixForm * helixForm;
        }

        const lineReach = smooth.connectionDistance * reachScale;
        const maxDistSq = lineReach * lineReach;

        lastLineIdx = rebuildSynapseLineSegments(
          pPos,
          activeCount,
          maxDistSq,
          lineReach,
          nodeColors,
          lPos,
          lCol,
        );

        lineGeometry.setDrawRange(0, lastLineIdx * 2);
        linePosAttr.needsUpdate = true;
        lineColAttr.needsUpdate = true;
      }

      particleGeometry.setDrawRange(0, activeCount);

      const bloomBoost = morphProgress >= 0.5 ? 1 + (panel.bloomIntensity - 1) * smooth.shapeT23 * 0.35 : 1;
      particleMaterial.size = smooth.particleSize * bloomBoost;

      let lineOpacity = 0.28;
      if (morphProgress < 0.12) {
        lineOpacity = 0.28;
      } else if (morphProgress < 0.58) {
        lineOpacity = 0.16 + 0.12 * smooth.shapeT12;
      } else if (smooth.shapeT23 < 0.85) {
        lineOpacity = (0.12 + 0.2 * smooth.shapeT23) * (1 + (panel.bloomIntensity - 1) * smooth.shapeT23 * 0.25);
      } else if (isTransitioning) {
        lineOpacity = 0.18;
      } else {
        lineOpacity = 0.32 * (1 + (panel.bloomIntensity - 1) * 0.2);
      }
      lineMaterial.opacity = lineOpacity;

      if (morphProgress < 0.5) {
        fog.density = 0.0025 + 0.001 * smooth.shapeT12;
      } else {
        fog.density = 0.0028 - 0.0006 * smooth.shapeT23;
      }

      if (profile.mouseParallax) {
        camera.position.x += (mouseX * 0.03 * motionScale - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 0.03 * motionScale - camera.position.y) * 0.02;
      }
      camera.lookAt(lookTarget);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleWindowResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (profile.mouseParallax) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeometry.dispose();
      lineGeometry.dispose();
      particleMaterial.dispose();
      lineMaterial.dispose();
    };
  }, [settingsRef]);

  if (webglFailed) {
    return (
      <div
        className={className ?? "absolute inset-0 z-0 bg-[#020202]"}
        style={{
          backgroundImage: "url(/hero/cinematic-fog-glow.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={className ?? "absolute inset-0 z-0 bg-[#020202]"}
      style={{ opacity: 1, width: "100%", height: "100%" }}
      aria-hidden
    />
  );
}
