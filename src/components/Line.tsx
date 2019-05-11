import * as React from "react";

function pathInstructionsToPath(
  origin: [number, number],
  // [angle, lenght]
  path: Array<[number, number]>
): string {
  let lastPoint = origin;
  const pointPath = path.map(line => {
    const [angle, lenght] = line;
    const x: number = Math.sin(angle) * lenght;
    const y: number = Math.cos(angle) * lenght;
    const end: [number, number] = [lastPoint[0] + x, lastPoint[1] + y];
    lastPoint = end;
    return end;
  });

  const a = [origin, ...pointPath.map(point => point.join(","))];
  return a.join(" ");
}

interface Props {
  origin: [number, number];
  // [angle, lenght]
  path: Array<[number, number]>;
}

const Line: React.FC<Props> = ({ origin, path }) => (
  <polyline
    points={pathInstructionsToPath(origin, path)}
    stroke="orange"
    fill="transparent"
    stroke-width="5"
  />
);

export default Line;
