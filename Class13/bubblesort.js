//O(n2)/O(n) and O(1)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
      if (swapped === false) {
        break;
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

console.log(bubbleSort([6, 4, 3, 8]));
console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
