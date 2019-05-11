import * as React from "react";
import { render } from "react-dom";
import Line from "./components/Line";
import "./styles.css";

interface oldProps {
  angle: number;
  lenght: number;
  origin: [number, number];
}

const OldLine: React.FC<oldProps> = ({ angle, origin, lenght }) => {
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
  for (let i: number = 0; i <= 0.5; i += 0.1) {
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
          <OldLine key={kont} origin={[500, 500]} angle={kont} lenght={200} />
        ))}
        <Line origin={[10, 10]} path={[[0, 100], [1.5, 200]]} />
        <Line origin={[400, 10]} path={[[0, 100], [1.5, 200], [4, 56]]} />
      </svg>
    </div>
  );
};

const rootElement: HTMLElement | null = document.getElementById("root");
render(<App />, rootElement);
