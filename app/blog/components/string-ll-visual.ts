export function StrLLVisual(vals: number[]): string {
  let str = "";
  for (let i = 0; i < vals.length - 1; i++) {
    str += `${vals[i]} -${">"} `;
  }

  str += vals[vals.length - 1];
  return str;
}
