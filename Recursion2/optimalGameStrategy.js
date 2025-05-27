function optimalGameStrategy(arr, i, j) {
  if (i > j) return 0;

  const choice1 =
    arr[i] +
    min(
      optimalGameStrategy(arr, i + 2, j),
      optimalGameStrategy(arr, i + 1, j - 1)
    );
  const choice2 =
    arr[j] +
    min(
      optimalGameStrategy(arr, i + 1, j - 1),
      optimalGameStrategy(arr, i, j - 2)
    );

  return max(choice1, choice2);
}

function min(item1, item2) {
  return item1 > item2 ? item2 : item1;
}

function max(item1, item2) {
  return item1 > item2 ? item1 : item2;
}

const arr1 = [20, 30, 2, 2, 2, 10];
console.log(optimalGameStrategy(arr1, 0, arr1.length - 1));

const arr2 = [5, 3, 7, 10];
console.log(optimalGameStrategy(arr2, 0, arr2.length - 1));
