import { maxChar } from "./max-char";

describe("maxChar", () => {
  it("should return the most frequent character in a string", () => {
    expect(maxChar("Hello World!")).toBe("l");
    expect(maxChar("apple 1231111")).toBe("1");
    expect(maxChar("1231111")).toBe("1");
  });

  it("should handle empty string", () => {
    expect(maxChar("")).toBe("");
  });

  it("should handle single character string", () => {
    expect(maxChar("a")).toBe("a");
    expect(maxChar("z")).toBe("z");
  });
});
