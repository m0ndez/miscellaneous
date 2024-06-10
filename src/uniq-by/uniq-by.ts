export const uniqBy = <T>(arr: T[], fn: (item: T) => any): T[] => {
  const seen = new Set();
  return arr.filter((item) => {
    const key = fn(item);
    return seen.has(key) ? false : seen.add(key);
  });
};
