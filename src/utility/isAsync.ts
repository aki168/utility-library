export const isAsync = (val: unknown) =>
  Object.prototype.toString.call(val) === "[object AsyncFunction]";
