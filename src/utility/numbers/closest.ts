const getClosest = (arr: number[], target: number) =>
  arr.reduce((prev, curr) =>
    Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev
  );

getClosest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50); // 33

export { getClosest };
