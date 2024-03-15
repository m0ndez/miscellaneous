import { reverseInt } from "./reverse-int";

describe("reverseInt", () => {
  it("should reverse positive numbers", () => {
    expect(reverseInt(123)).toBe(321);
    expect(reverseInt(456789)).toBe(987654);
  });

  it("should reverse negative numbers", () => {
    expect(reverseInt(-123)).toBe(-321);
    expect(reverseInt(-456789)).toBe(-987654);
  });

  it("should handle single digit numbers", () => {
    expect(reverseInt(0)).toBe(0);
    expect(reverseInt(5)).toBe(5);
    expect(reverseInt(-9)).toBe(-9);
  });
});
