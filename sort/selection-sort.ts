const selectionSort = (input: number[]): number[] => {
  const arr = [...input];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    let smallest = arr[i];
    let smallestIndex = i;

    for (let j = i; j < length; j++) {
      if (arr[j] < smallest) {
        smallest = arr[j];
        smallestIndex = j;
      }
    }

    let temp = arr[i];
    arr[i] = smallest;
    arr[smallestIndex] = temp;
  }

  return arr;
};

export { selectionSort };
