import * as React from "react";
import { render } from "react-dom";
import Line from "./components/Line";
import { test } from "./helpers/utils";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <svg
        viewBox="0 0 1000 1000"
        style={{
          backgroundColor: "white",
          transform: "rotateX(180deg)"
        }}
      >
        <Line origin={[400, 10]} path={test()} />
      </svg>
    </div>
  );
};

const rootElement: HTMLElement | null = document.getElementById("root");
render(<App />, rootElement);
