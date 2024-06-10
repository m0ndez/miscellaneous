import { longestCommonPrefix } from "./longest-common-prefix";

describe("longestCommonPrefix", () => {
  it("should return the longest common prefix", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    expect(longestCommonPrefix(["apple", "ape", "april"])).toBe("ap");
  });

  it("should return an empty string if the input array is empty", () => {
    expect(longestCommonPrefix([])).toBe("");
  });

  it("should return the input string if the input array contains only one string", () => {
    expect(longestCommonPrefix(["hello"])).toBe("hello");
    expect(longestCommonPrefix(["world"])).toBe("world");
  });

  it("should handle strings with special characters", () => {
    expect(longestCommonPrefix(["$100", "$200", "$300"])).toBe("$");
    expect(longestCommonPrefix(["@abc", "@def", "@ghi"])).toBe("@");
  });
});
