import * as React from "react";
import { render } from "react-dom";
import Line from "./components/Line";
import getInstruction from "./helpers/getInstruction";
import "./styles.css";

function test(): Array<[number, number]> {
  const seq: string = [
    "111111",
    "111010",
    "010000",
    "000001",
    "001000",
    "000000",
    "100001",
    "111110",
    "000000",
    "000000",
    "000000",
    "010000",
    "001111",
    "101010",
    "111111",
    "111111"
  ].join("");
  let result: Array<[number, number]>;
  try {
    result = getInstruction(seq);
  } catch (error) {
    console.error(error);
    result = [];
  }
  console.log(result);
  return result;
}

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
        <Line origin={[400, 0]} path={test()} />
      </svg>
    </div>
  );
};

const rootElement: HTMLElement | null = document.getElementById("root");
render(<App />, rootElement);
