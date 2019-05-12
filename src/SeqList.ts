import { parseSeqToInstruction } from "./helpers/getInstruction";


export default class SeqList {
  public seqList: string[] = [];

  constructor(initialList: string[]) {
    this.seqList = initialList;
  }

  asInstructions(): Instruction[] {
    return this.seqList.map(parseSeqToInstruction);
  }
}
