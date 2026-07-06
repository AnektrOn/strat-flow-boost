/**
 * Rebuild des arêtes synapse via grille spatiale — O(n × k) au lieu de O(n²).
 * k = voisins moyens par cellule (typ. 8–40 selon reach / density).
 */
export function rebuildSynapseLineSegments(
  positions: Float32Array,
  activeCount: number,
  maxDistSq: number,
  cellSize: number,
  nodeColors: Float32Array,
  linePositions: Float32Array,
  lineColors: Float32Array,
): number {
  if (activeCount < 2) return 0;

  const invCell = 1 / Math.max(cellSize, 1);
  const grid = new Map<number, number[]>();

  for (let i = 0; i < activeCount; i++) {
    const i3 = i * 3;
    const cx = Math.floor(positions[i3] * invCell);
    const cy = Math.floor(positions[i3 + 1] * invCell);
    const cz = Math.floor(positions[i3 + 2] * invCell);
    const key = packCellKey(cx, cy, cz);
    let bucket = grid.get(key);
    if (!bucket) {
      bucket = [];
      grid.set(key, bucket);
    }
    bucket.push(i);
  }

  let lineIdx = 0;

  for (let i = 0; i < activeCount; i++) {
    const i3 = i * 3;
    const ax = positions[i3];
    const ay = positions[i3 + 1];
    const az = positions[i3 + 2];
    const cx = Math.floor(ax * invCell);
    const cy = Math.floor(ay * invCell);
    const cz = Math.floor(az * invCell);

    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        for (let dz = -1; dz <= 1; dz++) {
          const bucket = grid.get(packCellKey(cx + dx, cy + dy, cz + dz));
          if (!bucket) continue;

          for (let b = 0; b < bucket.length; b++) {
            const j = bucket[b];
            if (j <= i) continue;

            const j3 = j * 3;
            const ddx = positions[j3] - ax;
            const ddy = positions[j3 + 1] - ay;
            const ddz = positions[j3 + 2] - az;
            const distSq = ddx * ddx + ddy * ddy + ddz * ddz;

            if (distSq >= maxDistSq) continue;

            const li = lineIdx * 6;
            linePositions[li] = ax;
            linePositions[li + 1] = ay;
            linePositions[li + 2] = az;
            linePositions[li + 3] = positions[j3];
            linePositions[li + 4] = positions[j3 + 1];
            linePositions[li + 5] = positions[j3 + 2];

            lineColors[li] = nodeColors[i3];
            lineColors[li + 1] = nodeColors[i3 + 1];
            lineColors[li + 2] = nodeColors[i3 + 2];
            lineColors[li + 3] = nodeColors[j3];
            lineColors[li + 4] = nodeColors[j3 + 1];
            lineColors[li + 5] = nodeColors[j3 + 2];

            lineIdx++;
          }
        }
      }
    }
  }

  return lineIdx;
}

/** Clé entière compacte pour Map — évite les concat strings par frame. */
function packCellKey(cx: number, cy: number, cz: number): number {
  return cx * 73856093 ^ cy * 19349663 ^ cz * 83492791;
}
