import { expect, describe, test } from 'bun:test';
import { makeNumbersArray } from '../fixtures/numbers';
import { shuffle } from '../fixtures/shuffle';
import { quicksort } from './quicksort';
import { selectionSort } from './selection-sort';

describe('sorting algorithms', () => {
  const testCases = [1, 10, 100, 1000, 10000].map((elementsLength) => {
    const expected = makeNumbersArray(elementsLength);
    const input = shuffle(expected);

    return { expected, input, elementsLength };
  });

  describe('quicksort', () => {
    testCases.forEach(({ input, expected, elementsLength }) => {
      test(`${elementsLength} elements`, () => {
        const result = quicksort(input);

        expect(result.length).toBe(expected.length);
        expect(result).toStrictEqual(expected);
      });
    });

    test('possible worst case', () => {
      const input = Array.from({ length: 100000 }, (_, i) => i + 1);

      const result = quicksort(input);
      expect(result.length).toBe(input.length);
      expect(result).toStrictEqual(input);
    });
  });

  describe('selection sort', () => {
    testCases.forEach(({ input, expected, elementsLength }) => {
      test(`${elementsLength} elements`, () => {
        const result = selectionSort(input);

        expect(result.length).toBe(expected.length);
        expect(result).toStrictEqual(expected);
      });
    });
  });
});
