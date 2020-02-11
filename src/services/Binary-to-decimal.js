export default function binaryToDecimalConverter(binary) {
  return binary
    .split('')
    .reverse()
    .map((e, i) => e * 2 ** i)
    .reduce((acc, val) => acc + val);
}
