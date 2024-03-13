import { isPalindrome } from "./palindome";

describe("isPalindrome", () => {
  it("should return true for a palindrome string", () => {
    expect(isPalindrome("level")).toBe(true);
    expect(isPalindrome("radar")).toBe(true);
    expect(isPalindrome("madam")).toBe(true);
    expect(isPalindrome("racecar")).toBe(true);

    expect(isPalindrome("Le v el")).toBe(true);
    expect(isPalindrome("Ra d ar")).toBe(true);
    expect(isPalindrome("Ma d am")).toBe(true);
    expect(isPalindrome("Ra ce car")).toBe(true);
  });

  it("should return false for a non-palindrome string", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
    expect(isPalindrome("github")).toBe(false);
  });

  it("should handle empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("should handle single character string", () => {
    expect(isPalindrome("a")).toBe(true);
    expect(isPalindrome("z")).toBe(true);
  });
});
