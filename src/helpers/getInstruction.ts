import { specialCodons, codonLength } from "../constants/codonConsts";
import { bin2dec, seqToCodonArray } from "./utils";

function arrayToInstruction(stringArray: string[]): Array<[number, number]> {
  if (stringArray.length % 2 === 1) {
    throw Error("Angle without length");
  }
  const result: Array<[number, number]> = [];
  // let lastAngleOperator;
  // let lastLengthOperator;
  for (let i = 0; i < stringArray.length; i += 2) {
    result.push([bin2dec(stringArray[i]), bin2dec(stringArray[i + 1])]);
  }
  console.log(result);
  return result;
}

export default function getInstruction(seq: string) {
  let seqAsArray: string[] = seqToCodonArray(
    seq.slice(seq.indexOf(specialCodons.start) + codonLength)
  );

  if (seqAsArray.indexOf(specialCodons.stop) === -1) {
    throw Error("Stop codon not found");
  }

  seqAsArray = seqAsArray.slice(0, seqAsArray.indexOf(specialCodons.stop));

  if (seqAsArray[seqAsArray.length - 1].length !== codonLength) {
    throw Error(`Last string heve length not equal to ${codonLength}`);
  }

  console.log(seqAsArray);
  const instruction = arrayToInstruction(seqAsArray);
  return instruction;
}
