const indexOfMax = (nums: number[]) =>
  nums.reduce((prev, curr, idx, arr) => (curr > arr[prev] ? idx : prev), 0);

indexOfMax([1, 3, 9, 7, 5]); // 2

const indexOfMin = (nums: number[]) =>
  nums.reduce((prev, curr, idx, arr) => (curr < arr[prev] ? idx : prev), 0);

indexOfMin([2, 5, 3, 4, 1, 0, 9]); // 5

export { indexOfMax, indexOfMin };
