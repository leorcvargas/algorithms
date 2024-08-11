export const makeNumbersArray = (length = 10000): number[] =>
  Array.from({ length }, (_, i) => i + 1);
