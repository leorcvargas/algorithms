function quicksort(arr: number[]): number[] {
  if (arr.length < 2) return arr;

  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];

  let leftArr: number[] = [];
  let rightArr: number[] = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (i === pivotIndex) continue;

    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return quicksort(leftArr).concat([pivot], quicksort(rightArr));
}

export { quicksort };
