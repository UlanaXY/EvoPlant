import * as React from "react";
import { render } from "react-dom";
import PlantGraphicRepresentation from "./components/PlantGraphicRepresentation";
import Layout from "./components/Layout";
import getTestSet from "./helpers/getTestSet"
import SeqList from "./SeqList";
import "./styles.css";

interface State {
  plantsPaths: Instruction[];
}

class App extends React.Component<{}, State> {
  plantsSeq = new SeqList(getTestSet(false));

  constructor(props: {}) {
    super(props);

    this.state = {
      plantsPaths: this.plantsSeq.asInstructions()
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
    const { plantsPaths } = this.state;
    return (
      <Layout>
        {plantsPaths.map(
          (instruction: Instruction, i: number): React.ReactNode => (
            <PlantGraphicRepresentation
              key={i}
              instruction={instruction}
            />
          )
        )}
      </Layout>
    );
  }
}

const rootElement: HTMLElement | null = document.getElementById("root");
render(<App />, rootElement);
