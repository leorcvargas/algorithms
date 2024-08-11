/**
 * Reference: http://stackoverflow.com/questions/962802#962890
 */
const shuffle = <T>(input: T[]) => {
  let array = [...input];

  var tmp,
    current,
    top = array.length;
  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  return array;
};

export { shuffle };
