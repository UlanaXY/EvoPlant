import * as React from "react";
import styled from "styled-components";


function pathInstructionsToPath(
  origin: [number, number],
  // [angle, lenght]
  path: Array<[number, number]>
): string {
  let lastPoint: [number, number] = origin;
  let resultString: string = origin.join(",");
  path.forEach(line => {
    const [angle, lenght] = line;
    const x: number = Math.sin(angle) * lenght;
    const y: number = Math.cos(angle) * lenght;
    const end: [number, number] = [lastPoint[0] + x, lastPoint[1] + y];
    lastPoint = end;
    resultString += " " + end.join(",");
  });

  return resultString;
}

interface Props {
  origin: [number, number];
  // [angle, lenght]
  pathInstructions: Array<[number, number]>;
}

const StyledLine = styled.polyline`
    stroke: #6fee87;
    fill: transparent;
    stroke-width: 5px;
`;

const Line: React.FC<Props> = ({ origin, pathInstructions }) => (
  <StyledLine
    points={pathInstructionsToPath(origin, pathInstructions)}
  />
);

export default Line;
