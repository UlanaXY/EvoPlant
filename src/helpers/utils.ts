import specialCodons from "../constants/specialCodons";

export function bin2dec(bin: string): number {
  return Number(parseInt(bin, 2).toString(10));
}

function arrayToInstruction(stringArray: string[]): Array<[number, number]> {
  if (stringArray.length % 2 === 1) {
    throw Error("Angle without length");
  }
  const result: Array<[number, number]> = [];
  for (let i = 0; i < stringArray.length; i += 2) {
    result.push([bin2dec(stringArray[i]), bin2dec(stringArray[i + 1])]);
  }
  console.log(result);
  return result;
}

function getInstruction(seq: string) {
  let a: string[] = seq
    .slice(seq.indexOf(specialCodons.start) + 10)
    .match(/.{1,10}/g);
  a = a.slice(0, a.indexOf(specialCodons.stop));

  if (a[a.length - 1].length !== 10) {
    throw Error("Last string heve length not equal to ten");
  }

  console.log(a);
  const instruction = arrayToInstruction(a);
  return instruction;
}

export function test(): Array<[number, number]> {
  const seq =
    "0000000000000000011111010010000000001001000000000000000100001000000000000000000010000001111101010111111111111111111111111111111111111111111";
  const result = getInstruction(seq);
  console.log(result);
  return result;
}
