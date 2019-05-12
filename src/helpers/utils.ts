import { codonLength } from "../constants/codonConsts";

export function bin2dec(bin: string): number {
  return parseInt(bin, 2);
}

export function seqToCodonArray(str: string): string[] {
  const result = str.match(new RegExp(`.{1,${codonLength}}`, "g"));
  return result || [];
}
