import { uniqBy } from "./uniq-by";

test("uniqBy returns unique elements based on the provided key", () => {
  const arr = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "John" },
    { id: 4, name: "Jane" },
    { id: 5, name: "John" },
  ];

  const result = uniqBy(arr, (item) => item.name);

  expect(result).toEqual([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ]);
});

test("uniqBy returns all elements when no duplicates are found", () => {
  const arr = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Alice" },
  ];

  const result = uniqBy(arr, (item) => item.name);

  expect(result).toEqual(arr);
});

test("uniqBy returns an empty array when the input array is empty", () => {
  const arr: any[] = [];

  const result = uniqBy(arr, (item) => item.name);

  expect(result).toEqual([]);
});
