import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const METAPHYSIQUE_PATH = "/metaphysique";
const BUBBLE_VISIBLE_PATHS = ["/", METAPHYSIQUE_PATH] as const;

const BUBBLE = 44;
const MARGIN = 10;
const FLEE_RADIUS = 130;
const FLEE_FORCE = 2.5;
const DAMP = 0.93;
const IDLE_CHASE = 0.055;
const IDLE_CALM = 0.018;
const MAX_SPEED_CHASE = 12;
const MAX_SPEED_CALM = 4;
const CALM_RADIUS = 52;
const CALM_FACTOR = 0.14;
const STILL_MOUSE_THRESHOLD = 1.2;
const STILL_MOUSE_MULT = 0.38;
const WANDER_PULL_CHASE = 0.08;
const WANDER_PULL_CALM = 0.04;
const WANDER_REACH_RADIUS = 36;
const WANDER_RETARGET_MIN_MS = 1500;
const WANDER_RETARGET_MAX_MS = 3600;

const CHASE_MS = 3000;
const TILT_SHAVE_MS = 750;
const TILT_THROTTLE_MS = 650;
const TILT_STRENGTH = 42;
const CHASE_MIN_LEFT_MS = 450;

const POPOVER_MARGIN = 12;
const POPOVER_GAP = 12;
const POPOVER_MAX_W = 320;

function clampPos(x: number, y: number, vw: number, vh: number) {
  return {
    x: Math.min(Math.max(MARGIN, x), vw - BUBBLE - MARGIN),
    y: Math.min(Math.max(MARGIN, y), vh - BUBBLE - MARGIN),
  };
}

function isCoarsePointer() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

function hasOrientationPermissionAPI() {
  return typeof DeviceOrientationEvent !== "undefined" && "requestPermission" in DeviceOrientationEvent;
}

function randomInRange(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function pickWanderTarget(vw: number, vh: number) {
  return clampPos(
    randomInRange(MARGIN, Math.max(MARGIN, vw - BUBBLE - MARGIN)),
    randomInRange(MARGIN, Math.max(MARGIN, vh - BUBBLE - MARGIN)),
    vw,
    vh,
  );
}

/** Place le popover (fixed viewport) entièrement dans l’écran, au-dessus ou au-dessous de la bulle. */
function computePopoverRect(trigger: DOMRect, popHeight: number, popWidth: number) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const m = POPOVER_MARGIN;
  const gap = POPOVER_GAP;
  const maxH = vh - 2 * m;
  const h = Math.min(popHeight, maxH);

  const w = Math.min(popWidth, vw - 2 * m);
  let left = trigger.left + trigger.width / 2 - w / 2;
  left = Math.max(m, Math.min(left, vw - m - w));

  let top = trigger.top - h - gap;
  if (top < m) {
    top = trigger.bottom + gap;
  }
  if (top + h > vh - m) {
    top = Math.max(m, vh - m - h);
  }
  if (top < m) {
    top = m;
  }

  return { top, left, width: w };
}

function interp(template: string, seconds: string) {
  return template.replace(/\{seconds\}/g, seconds);
}

const FloatingMetaphysicBubble = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [phase, setPhase] = useState<"chasing" | "calm">("chasing");
  const [msLeft, setMsLeft] = useState(CHASE_MS);
  const [nudge, setNudge] = useState(false);
  const [orientationGranted, setOrientationGranted] = useState<boolean | null>(null);

  const [popoverHover, setPopoverHover] = useState(false);
  const [popoverStyle, setPopoverStyle] = useState<{ top: number; left: number; width: number } | null>(null);

  const moverRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLButtonElement>(null);
  const popoverInnerRef = useRef<HTMLDivElement>(null);
  const popoverOuterRef = useRef<HTMLDivElement>(null);
  const leaveTimerRef = useRef<number | null>(null);

  const mouseRef = useRef({ x: -9999, y: -9999 });
  const lastMouseForSpeedRef = useRef({ x: -9999, y: -9999 });
  const velRef = useRef({ x: 0, y: 0 });
  const posRef = useRef({ x: 80, y: 120 });
  const wanderTargetRef = useRef({ x: 280, y: 200 });
  const nextWanderRetargetRef = useRef(0);
  const rafRef = useRef(0);
  const navigatedRef = useRef(false);
  const chaseEndRef = useRef(0);
  const lastTiltShaveRef = useRef(0);
  const phaseAnnouncedRef = useRef(false);

  const visible = BUBBLE_VISIBLE_PATHS.includes(
    location.pathname as (typeof BUBBLE_VISIBLE_PATHS)[number],
  );
  const coarse = isCoarsePointer();
  const showDesktopPopover = !coarse;

  const go = useCallback(() => {
    navigate(METAPHYSIQUE_PATH);
  }, [navigate]);

  const applyTransform = useCallback(() => {
    const el = moverRef.current;
    if (!el) return;
    const { x, y } = posRef.current;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }, []);

  const clearLeaveTimer = () => {
    if (leaveTimerRef.current) {
      window.clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  };

  const schedulePopoverLeave = () => {
    clearLeaveTimer();
    leaveTimerRef.current = window.setTimeout(() => {
      setPopoverHover(false);
      setPopoverStyle(null);
    }, 320);
  };

  const repositionPopover = useCallback(() => {
    if (!showDesktopPopover || !popoverHover) return;
    const bubble = bubbleRef.current;
    const inner = popoverInnerRef.current;
    if (!bubble || !inner) return;

    const r = bubble.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const m = POPOVER_MARGIN;
    const w = Math.min(POPOVER_MAX_W, vw - 2 * m);
    const maxH = vh - 2 * m;
    inner.style.width = `${w}px`;
    inner.style.maxHeight = `${maxH}px`;
    inner.style.overflowY = "auto";
    const h = inner.getBoundingClientRect().height;
    const { top, left, width } = computePopoverRect(r, h, w);
    setPopoverStyle({ top, left, width });
  }, [showDesktopPopover, popoverHover]);

  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    chaseEndRef.current = start + CHASE_MS;
    phaseAnnouncedRef.current = false;
    setPhase("chasing");
    setMsLeft(CHASE_MS);

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const p = clampPos(vw * 0.55, vh * 0.25, vw, vh);
    posRef.current = p;
    velRef.current = { x: 0, y: 0 };
    wanderTargetRef.current = pickWanderTarget(vw, vh);
    nextWanderRetargetRef.current = performance.now() + randomInRange(WANDER_RETARGET_MIN_MS, WANDER_RETARGET_MAX_MS);
    requestAnimationFrame(applyTransform);
  }, [visible, applyTransform]);

  useEffect(() => {
    if (!visible) return;
    const id = window.setInterval(() => {
      const left = Math.max(0, chaseEndRef.current - performance.now());
      setMsLeft(Math.round(left));
      if (left <= 0 && !phaseAnnouncedRef.current) {
        phaseAnnouncedRef.current = true;
        setPhase("calm");
      }
    }, 100);
    return () => window.clearInterval(id);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    if (!isCoarsePointer()) return;

    const onOrient = (e: DeviceOrientationEvent) => {
      if (performance.now() >= chaseEndRef.current) return;
      const g = e.gamma ?? 0;
      const b = e.beta ?? 90;
      const tilt = Math.abs(g) + Math.abs(b - 90);
      if (tilt < TILT_STRENGTH) return;
      const now = performance.now();
      if (now - lastTiltShaveRef.current < TILT_THROTTLE_MS) return;
      lastTiltShaveRef.current = now;
      const floor = now + CHASE_MIN_LEFT_MS;
      chaseEndRef.current = Math.max(floor, chaseEndRef.current - TILT_SHAVE_MS);
    };

    const startListener = () => {
      window.addEventListener("deviceorientation", onOrient, true);
    };

    if (hasOrientationPermissionAPI()) {
      if (orientationGranted === true) startListener();
    } else {
      if (orientationGranted !== false) setOrientationGranted(true);
      startListener();
    }

    return () => {
      window.removeEventListener("deviceorientation", onOrient, true);
    };
  }, [visible, orientationGranted]);

  const requestOrientation = useCallback(async () => {
    try {
      const ctor = DeviceOrientationEvent as unknown as {
        requestPermission?: () => Promise<PermissionState>;
      };
      const res = await ctor.requestPermission?.();
      if (res === "granted") setOrientationGranted(true);
      else setOrientationGranted(false);
    } catch {
      setOrientationGranted(false);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;

    const tick = (t: number) => {
      const now = performance.now();
      const chasing = now < chaseEndRef.current;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const { x: mx, y: my } = mouseRef.current;
      let { x, y } = posRef.current;
      let { x: vx, y: vy } = velRef.current;

      const cx = x + BUBBLE / 2;
      const cy = y + BUBBLE / 2;
      const dx = cx - mx;
      const dy = cy - my;
      const dist = Math.hypot(dx, dy);
      const tx = wanderTargetRef.current.x + BUBBLE / 2 - cx;
      const ty = wanderTargetRef.current.y + BUBBLE / 2 - cy;
      const targetDist = Math.hypot(tx, ty);

      if (now >= nextWanderRetargetRef.current || targetDist < WANDER_REACH_RADIUS) {
        wanderTargetRef.current = pickWanderTarget(vw, vh);
        nextWanderRetargetRef.current = now + randomInRange(WANDER_RETARGET_MIN_MS, WANDER_RETARGET_MAX_MS);
      }

      const lmx = lastMouseForSpeedRef.current.x;
      const lmy = lastMouseForSpeedRef.current.y;
      const mouseSpeed =
        lmx < -5000 ? STILL_MOUSE_THRESHOLD + 1 : Math.hypot(mx - lmx, my - lmy);
      lastMouseForSpeedRef.current = { x: mx, y: my };

      let fleeMult = 1;
      if (chasing) {
        if (mouseSpeed < STILL_MOUSE_THRESHOLD) fleeMult *= STILL_MOUSE_MULT;
        if (dist < CALM_RADIUS) fleeMult *= CALM_FACTOR + (dist / CALM_RADIUS) * (1 - CALM_FACTOR) * 0.42;

        if (dist < FLEE_RADIUS && dist > 0.5) {
          const falloff = (FLEE_RADIUS - dist) / FLEE_RADIUS;
          const inv = 1 / dist;
          const ux = dx * inv;
          const uy = dy * inv;
          const push = FLEE_FORCE * falloff * falloff * fleeMult;
          vx += ux * push;
          vy += uy * push;
        }
      }

      const idle = chasing ? IDLE_CHASE : IDLE_CALM;
      vx += Math.sin(t * 0.0018) * idle;
      vy += Math.cos(t * 0.0014) * idle;

      if (targetDist > 1) {
        const invTarget = 1 / targetDist;
        const pull = chasing ? WANDER_PULL_CHASE : WANDER_PULL_CALM;
        const gain = Math.min(1.6, targetDist / 210);
        vx += tx * invTarget * pull * gain;
        vy += ty * invTarget * pull * gain;
      }

      const maxSp = chasing ? MAX_SPEED_CHASE : MAX_SPEED_CALM;
      const sp = Math.hypot(vx, vy);
      if (sp > maxSp) {
        vx = (vx / sp) * maxSp;
        vy = (vy / sp) * maxSp;
      }

      vx *= DAMP;
      vy *= DAMP;

      x += vx;
      y += vy;
      const c = clampPos(x, y, vw, vh);
      if (c.x !== x) vx *= -0.35;
      if (c.y !== y) vy *= -0.35;

      velRef.current = { x: vx, y: vy };
      posRef.current = c;

      const el = moverRef.current;
      if (el) el.style.transform = `translate3d(${c.x}px, ${c.y}px, 0)`;

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;

    const setMouse = (clientX: number, clientY: number) => {
      mouseRef.current = { x: clientX, y: clientY };
    };

    const onMove = (e: MouseEvent) => setMouse(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) setMouse(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [visible]);

  useLayoutEffect(() => {
    if (!popoverHover || !showDesktopPopover) return;
    repositionPopover();
  }, [popoverHover, showDesktopPopover, repositionPopover, phase, msLeft]);

  useEffect(() => {
    if (!popoverHover || !showDesktopPopover) return;
    const onResize = () => repositionPopover();
    window.addEventListener("resize", onResize);
    const id = window.setInterval(repositionPopover, 120);
    return () => {
      window.removeEventListener("resize", onResize);
      window.clearInterval(id);
    };
  }, [popoverHover, showDesktopPopover, repositionPopover]);

  const onCatch = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      if (navigatedRef.current) return;

      if (performance.now() < chaseEndRef.current) {
        setNudge(true);
        window.setTimeout(() => setNudge(false), 700);
        return;
      }

      navigatedRef.current = true;
      window.setTimeout(() => go(), 120);
    },
    [go],
  );

  useEffect(() => {
    if (!isCoarsePointer() || !hasOrientationPermissionAPI()) {
      setOrientationGranted((g) => (g === null ? true : g));
    }
  }, []);

  if (!visible) return null;

  const showIosOrientationBtn =
    coarse && hasOrientationPermissionAPI() && orientationGranted !== true;

  const pointerLeavingToPopover = (e: React.PointerEvent) => {
    const next = e.relatedTarget as Node | null;
    return Boolean(popoverOuterRef.current?.contains(next));
  };

  const pointerLeavingToBubble = (e: React.PointerEvent) => {
    const next = e.relatedTarget as Node | null;
    return Boolean(moverRef.current?.contains(next));
  };

  const secondsStr = (msLeft / 1000).toFixed(1);

  const popoverContent = (
    <div
      ref={popoverInnerRef}
      role="dialog"
      aria-label={t("floatingBubble.popover.ariaLabel")}
      className="rounded-2xl border border-n-border bg-n-bg/95 p-4 text-left shadow-xl backdrop-blur-md cursor-pointer"
      onPointerDown={onCatch}
      onPointerEnter={() => {
        clearLeaveTimer();
        setPopoverHover(true);
      }}
      onPointerLeave={(e) => {
        if (pointerLeavingToBubble(e)) return;
        schedulePopoverLeave();
      }}
    >
      <p className="font-display text-base italic text-n-gold mb-2 leading-snug">
        {t("floatingBubble.popover.title")}
      </p>
      <p className="text-xs text-n-muted leading-relaxed mb-3">
        {(() => {
          const full = t("floatingBubble.popover.body");
          const strong = t("floatingBubble.popover.bodyStrong");
          const parts = full.split(strong);
          if (parts.length === 2) {
            return (
              <>
                {parts[0]}
                <strong className="text-n-text">{strong}</strong>
                {parts[1]}
              </>
            );
          }
          return full;
        })()}
      </p>
      <p className="text-[11px] text-n-muted leading-relaxed mb-3 border-t border-n-border/60 pt-3">
        <span className="text-n-faint uppercase tracking-wider">
          {t("floatingBubble.popover.instructionsDesktopLabel")}
        </span>{" "}
        —{" "}
        {(() => {
          const full = t("floatingBubble.popover.instructionsDesktop");
          const strong = t("floatingBubble.popover.instructionsDesktopStrongPanel");
          const parts = full.split(strong);
          if (parts.length === 2) {
            return (
              <>
                {parts[0]}
                <strong className="text-n-text">{strong}</strong>
                {parts[1]}
              </>
            );
          }
          return full;
        })()}
        <br />
        <span className="text-n-faint uppercase tracking-wider mt-2 inline-block">
          {t("floatingBubble.popover.instructionsMobileLabel")}
        </span>{" "}
        — {t("floatingBubble.popover.instructionsMobile")}
      </p>
      <p className="text-[11px] text-n-faint">
        {phase === "chasing"
          ? interp(t("floatingBubble.popover.thresholdUnstable"), secondsStr)
          : t("floatingBubble.popover.thresholdStable")}
      </p>
    </div>
  );

  return (
    <>
      <div className="fixed left-0 top-0 z-[90] pointer-events-none">
        <div
          ref={moverRef}
          className="pointer-events-auto will-change-transform"
          style={{ transform: `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)` }}
          onPointerEnter={() => {
            if (!showDesktopPopover) return;
            clearLeaveTimer();
            setPopoverHover(true);
          }}
          onPointerLeave={(e) => {
            if (!showDesktopPopover) return;
            if (pointerLeavingToPopover(e)) return;
            schedulePopoverLeave();
          }}
        >
          <button
            ref={bubbleRef}
            type="button"
            onPointerDown={onCatch}
            className={`metaphysical-bubble-core relative flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-n-gold/25 bg-n-surface/55 text-n-gold/85 shadow-[0_0_12px_hsl(38_47%_45%/0.18)] backdrop-blur-sm transition-[transform,box-shadow] duration-150 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-n-gold/45 active:scale-95 ${
              phase === "calm" ? "ring-1 ring-n-teal/35" : ""
            } ${nudge ? "ring-2 ring-n-gold/90 scale-95" : ""}`}
            aria-label={
              phase === "chasing"
                ? interp(t("floatingBubble.bubble.ariaUnstable"), secondsStr)
                : t("floatingBubble.bubble.ariaStable")
            }
            aria-live="polite"
          >
            <span className="font-display text-[16px] leading-none italic">◈</span>
          </button>
        </div>

        <div className="pointer-events-auto absolute left-0 top-0 max-sm:fixed max-sm:bottom-3 max-sm:left-1/2 max-sm:top-auto max-sm:z-[91] max-sm:w-[min(18rem,calc(100vw-1.5rem))] max-sm:-translate-x-1/2 sm:hidden">
          {showIosOrientationBtn ? (
            <button
              type="button"
              onClick={requestOrientation}
              className="mb-2 w-full rounded-full border border-n-border bg-n-surface px-3 py-2 text-[10px] uppercase tracking-widest text-n-muted hover:border-n-teal hover:text-n-teal"
            >
              {t("floatingBubble.mobile.enableTiltIos")}
            </button>
          ) : orientationGranted === false ? (
            <p className="mb-2 text-[10px] text-n-faint">{t("floatingBubble.mobile.tiltDenied")}</p>
          ) : null}
          <p className="pointer-events-none text-center text-[10px] uppercase tracking-widest text-n-faint leading-relaxed">
            {phase === "chasing"
              ? interp(t("floatingBubble.mobile.hintUnstable"), secondsStr)
              : t("floatingBubble.mobile.hintStable")}
          </p>
        </div>
      </div>

      {showDesktopPopover &&
        popoverHover &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={popoverOuterRef}
            className="fixed z-[200] rounded-2xl shadow-2xl"
            style={
              popoverStyle
                ? {
                    top: popoverStyle.top,
                    left: popoverStyle.left,
                    width: popoverStyle.width,
                    opacity: 1,
                    pointerEvents: "auto",
                  }
                : {
                    top: 0,
                    left: 0,
                    width: POPOVER_MAX_W,
                    opacity: 0,
                    pointerEvents: "none",
                  }
            }
          >
            {popoverContent}
          </div>,
          document.body,
        )}
    </>
  );
};

export default FloatingMetaphysicBubble;
