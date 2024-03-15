export function maxChar(str: string): string {
  const charMap: { [key: string]: number } = {};
  let maxChar = "";
  let maxCount = 0;

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
    if (charMap[char] > maxCount) {
      maxChar = char;
      maxCount = charMap[char];
    }
  }

  return maxChar;
}
