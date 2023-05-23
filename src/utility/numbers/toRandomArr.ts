const randomSort = (list: number[]): number[] =>
  list.sort(() => Math.random() - 0.5);
// 回傳一個介於-0.5 ~ +0.5的數字
randomSort([0,1,2,3,4,5,6,7,8,9]) // 随机排列结果

export { randomSort }
