import * as React from "react";
import styled from "styled-components";


function pathInstructionsToPath(
  origin: Straight,
  path: Straight[]
): string {
  let lastPoint: Point = origin;
  let resultString: string = origin.join(",");
  path.forEach((line): void=> {
    const [angle, length] = line;
    const x: number = Math.sin(angle) * length;
    const y: number = Math.cos(angle) * length;
    const end: Point = [lastPoint[0] + x, lastPoint[1] + y];
    lastPoint = end;
    resultString += " " + end.join(",");
  });

  return resultString;
}



interface Props {
  origin: Point;
  pathInstructions: Straight[];
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
