export function reverseString(str: string): string {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substring(1)) + str.charAt(0);
  }
}
