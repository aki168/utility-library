const zip = (...arr: (number | string)[][]): (number | string)[][] =>
  Array.from({ length: Math.max(...arr.map((a) => a.length)) }, (_, i) =>
    arr.map((a) => a[i])
  );

zip([1, 2, 3, 4], ["a", "b", "c", "d"], ["A", "B", "C", "D"]);
// [[1, 'a', 'A'], [2, 'b', 'B'], [3, 'c', 'C'], [4, 'd', 'D']]

export { zip };
