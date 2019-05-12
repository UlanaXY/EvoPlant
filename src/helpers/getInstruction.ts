import {codonLength, specialCodons} from "../constants/codonConsts";
import {bin2dec, seqToCodonArray} from "./utils";


function arrayToInstruction(stringArray: string[]): Straight[] {
  if (stringArray.length % 2 === 1) {
    throw Error("Angle without length");
  }
  const result: Straight[] = [];
  // let lastAngleOperator;
  // let lastLengthOperator;
  for (let i = 0; i < stringArray.length; i += 2) {
    result.push([bin2dec(stringArray[i]), bin2dec(stringArray[i + 1])]);
  }
  console.log(result);
  return result;
}

function getInstruction(seq: string): Straight[] {
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
  return arrayToInstruction(seqAsArray);
}

export function parseSeqToInstruction(seq: string): Straight[] {

  let result: Straight[];
  try {
    result = getInstruction(seq);
  } catch (error) {
    console.error(error);
    result = [];
  }
  console.log(result);
  return result;
}
