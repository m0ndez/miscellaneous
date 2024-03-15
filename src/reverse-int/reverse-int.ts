export function reverseInt(num: number): number {
  const reversed = parseInt(num.toString().split("").reverse().join(""));
  return reversed * Math.sign(num);
}
