const binarySearch = (item: number, list: number[]) => {
  let start = 0;
  let end = list.length;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    const candidate = list[middle];

    if (candidate === item) {
      return middle;
    }

    if (candidate > item) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
};

export { binarySearch };
