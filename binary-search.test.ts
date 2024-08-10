import { expect, test, describe } from 'bun:test';

import { binarySearch } from './binary-search';

describe('binary search', () => {
  describe('list of numbers (1..10000)', () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i + 1);

    const shouldFindTestCases = [4328, 123, 1, 10000, 5000, 342, 432, 945];

    shouldFindTestCases.forEach((tC) => {
      test(`should the index of ${tC}`, () => {
        const result = binarySearch(tC, arr);

        expect(result).toBe(tC - 1);
      });
    });

    const shoulReturnNullTestCases = [-1000, 0, 1234934, 439508403, -1];
    shoulReturnNullTestCases.forEach((tC) => {
      test(`should return null for ${tC}`, () => {
        const result = binarySearch(tC, arr);

        expect(result).toBeNull();
      });
    });
  });
});
