import { expect, test, describe } from 'bun:test';

import { binarySearch } from './binary-search';

describe('binary search', () => {
  const arr = Array.from({ length: 10000 }, (_, i) => i + 1);

  const shouldFindTestCases = [4328, 123, 1, 10000, 5000, 342, 432, 945];

  shouldFindTestCases.forEach((tC) => {
    test(`should find ${tC}`, () => {
      const result = binarySearch(tC, arr);

      expect(result).toBe(tC - 1);
    });
  });

  const shoulReturnNullTestCases = [-1000, 0, 10001, 1234934, 439508403];
  shoulReturnNullTestCases.forEach((tC) => {
    test(`should not find ${tC}`, () => {
      const result = binarySearch(tC, arr);

      expect(result).toBe(-1);
    });
  });
});
