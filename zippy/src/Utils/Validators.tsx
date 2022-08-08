export const positiveNumber = (number: number): boolean => number > 0;

export const lessThanNDigits =
  (n: number) =>
  (number: number): boolean =>
    number.toString().length < n;

export const every =
  (...fns: Function[]) =>
  (arg: number) =>
    fns.reduce((prev, fn) => {
      return prev && fn(arg);
    }, true);
