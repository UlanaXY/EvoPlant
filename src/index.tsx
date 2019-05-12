import * as React from "react";
import { render } from "react-dom";
import PlantGraphicRepresentation from "./components/PlantGraphicRepresentation";
import Layout from "./components/Layout";
import { parseSeqToInstruction } from "./helpers/getInstruction";
import "./styles.css";

const seqArray: string[] = [];
for (let i = 0; i < 8 * 4; i += 1) {
  seqArray.push([
    "001111",
    "000000",
    "010000",
    "001111",
    "000000",
    "010000",
    "001111",
    "101010",
    "010000",
    "001111",
    "101010",
    "010000",
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
    "000000",
    "010000",
    "001111",
    "000000",
    "010000",
    "001111",
    "101010",
    "010000",
    "001111",
    "101010",
    "010000",
    "001111",
    "101010",
    "111111",
    "010000",
    "001111",
    "101010",
    "111111",
    "001111",
    "101010",
    "111111",
    "111111"
  ].join(""))
}
interface State {
  plantsSeq: string[];
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      plantsSeq: seqArray,
    }
  }

  private shouldLoopStop = false;
  private iter = 0;

  componentDidMount(): void {
    this.loop()
      .then((): void => {
        console.log('Loop finished');
      })
      .catch((error): void =>
        console.error(error)
      );
  }

  loop = async (): Promise<boolean> => {

    await this.processGeneration();

    if (!this.shouldLoopStop) {
      return this.loop();
    } else {
      return Promise.resolve(true);
    }
  };

  processGeneration = async (): Promise<void> => {
    console.log('a', this.iter);

    // mutate;
    // process;
    // sort
    // draw
    // kill half
    // replicate

    this.iter += 1;
    if (this.iter > 10) {
      this.shouldLoopStop = true;
    }
  };

  render(): React.ReactNode {
    return (
      <Layout>
        {seqArray.map(
          (seq: string, i: number): React.ReactNode => (
            <PlantGraphicRepresentation
              key={i}
              instruction={parseSeqToInstruction(seq)}
            />
          )
        )}
      </Layout>
    );
  }
}

const rootElement: HTMLElement | null = document.getElementById("root");
render(<App />, rootElement);
