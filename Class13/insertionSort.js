//O(n2)/O(n) and O(1)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

console.log(insertionSort([6, 4, 3, 8]));
console.log(insertionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(insertionSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
