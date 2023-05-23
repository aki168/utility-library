export const isEqual = (...objs: object[]) =>
  objs.every((obj) => JSON.stringify(obj) === JSON.stringify(objs[0]));

isEqual({name: 'jack'}, {name: 'jack'}) // true
isEqual({name: 'jack'}, {name: 'jack1'}, {name: 'jack'}) // false