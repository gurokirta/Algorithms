const binary = (val, arr) => {
  let lower = 0;
  let upper = arr.length - 1;

  while (lower <= upper) {
    console.log("try");
    const middle = lower + Math.floor((upper - lower) / 2);
    if (val === arr[middle]) {
      return middle;
    }

    if (val < arr[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }

  return -1;
};

const values = [0, 1, 2, 3, 4, 5, 50, 48, 96, 250, 700, 701, 1200];

console.log(binary(1200, values));
