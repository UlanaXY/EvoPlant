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
    this.loop();
  }

  loop = async (): Promise<void> => {
    try {
      console.log('a', this.iter);










      this.iter += 1;
      if (this.iter > 10) {
        this.shouldLoopStop = true;
      }

      if (!this.shouldLoopStop) {
        await this.loop();
      }
    } catch (e) {
      console.error(e);
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
