// 生成 0-99 的陣列

const createArrWithFrom = (num: number): number[] =>
  Array.from(new Array(num), (_, idx) => idx);

const createArrWithFill = (num: number): number[] =>
  new Array(num).fill(0).map((_, idx) => idx);

export { createArrWithFrom, createArrWithFill };
