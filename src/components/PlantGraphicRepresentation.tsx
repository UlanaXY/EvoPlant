import * as React from "react";
import styled from "styled-components";
import Line from "./Line";

const PlantCanvas = styled.svg`
  background-color: white;
  transform: rotateX(180deg);
  height: 250px;
  width: 250px;
`;

const PlantGraphicRepresentation: React.FC<{
  instruction: Array<[number, number]>
}> = ({ instruction }) => {
  return (
    <PlantCanvas viewBox="0 0 500 500">
      <Line origin={[250, 0]} pathInstructions={instruction} />
    </PlantCanvas>
  );
};

export default PlantGraphicRepresentation;
