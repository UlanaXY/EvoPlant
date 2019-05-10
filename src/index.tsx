import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

interface Props {
  angle: number;
  lenght: number;
  origin: [number, number];
}

const Line: React.FC<Props> = ({ angle, origin, lenght }) => {
  const x: number = Math.sin(angle) * lenght;
  const y: number = Math.cos(angle) * lenght;
  const end: [number, number] = [origin[0] + x, origin[1] + y];
  return (
    <polyline
      points={`${origin.join(",")} ${end.join(",")}`}
      stroke="orange"
      fill="transparent"
      stroke-width="5"
    />
  );
};

const App = () => {
  const test: number[] = [];
  for (let i: number = 0; i <= 1.5; i += 0.1) {
    test.push(i);
  }

  return (
    <div className="App">
      <svg
        viewBox="0 0 1000 1000"
        style={{
          backgroundColor: "white",
          transform: "rotateX(180deg)"
        }}
      >
        {test.map(kont => (
          <Line key={kont} origin={[0, 0]} angle={kont} lenght={200} />
        ))}
      </svg>
    </div>
  );
};

const rootElement: HTMLElement | null = document.getElementById("root");
render(<App />, rootElement);
