export function solution(area: number): number[] {
  let squares: number[] = [];

  while (area > 0) {
    let largestSquare = Math.floor(Math.sqrt(area));
    squares.push(largestSquare * largestSquare);
    area -= largestSquare * largestSquare;
  }

  return squares;
}
