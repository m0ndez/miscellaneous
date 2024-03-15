import { reverseString } from "./reverse-string";

describe("reverseString", () => {
  it("should reverse a non-empty string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
    expect(reverseString("GitHub Copilot")).toBe("tolipoC buHtiG");
  });

  it("should return an empty string when given an empty string", () => {
    expect(reverseString("")).toBe("");
  });

  it("should reverse a string with a single character", () => {
    expect(reverseString("a")).toBe("a");
    expect(reverseString("z")).toBe("z");
  });
});
