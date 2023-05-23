const crossOver = (arr: number[], ...arrs: number[][]) =>
  [...new Set(arr)].filter((val) => arrs.every((arrB) => arrB.includes(val)));

crossOver([1, 2, 3, 4], [2, 3, 4, 7, 8], [1, 3, 4, 9]);
// [3, 4]

export { crossOver };