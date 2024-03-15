import { solution } from "./solution";

test("solution returns correct squares for area 25", () => {
  expect(solution(25)).toEqual([25]);
});

test("solution returns correct squares for area 36", () => {
  expect(solution(36)).toEqual([36]);
});

test("solution returns correct squares for area 100", () => {
  expect(solution(100)).toEqual([100]);
});

test("solution returns correct squares for area 123", () => {
  expect(solution(123)).toEqual([121, 1, 1]);
});

test("solution returns correct squares for area 987", () => {
  expect(solution(987)).toEqual([961, 25, 1]);
});

test("solution returns correct squares for area 15324", () => {
  expect(solution(15324)).toEqual([15129, 169, 25, 1]);
});
