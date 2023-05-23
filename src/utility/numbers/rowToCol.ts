const rowToCol = <T>(aoa: T[][]): T[][] =>
  aoa[0].map((col, idx) => aoa.map((row) => row[idx]));

rowToCol(
  [
    // [
    [1, 2, 3], //      [1, 4, 7],
    [4, 5, 6], //      [2, 5, 8],
    [7, 8, 9], //      [3, 6, 9],
  ] //  ]
);

export { rowToCol };
