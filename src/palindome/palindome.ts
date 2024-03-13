export function isPalindrome(s: string): boolean {
  const normalizedString = s.replace(/[\W_]/g, "").toLowerCase();
  const reversedString = normalizedString.split("").reverse().join("");
  return normalizedString === reversedString;
}
