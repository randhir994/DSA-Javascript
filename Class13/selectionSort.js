//O(n2) and O(1)

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

  return arr;
}

console.log(selectionSort([6, 4, 3, 8]));
console.log(selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
