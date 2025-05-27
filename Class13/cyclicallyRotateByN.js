//O(n2)/O(n) and O(1)
function cyclicallyRotateByN(arr, k) {
  let result = [];
  let n = arr.length;
  let abK = k % n;

  for (let i = n - abK; i < n; i++) {
    result.push(arr[i]);
  }

  for (let i = 0; i < n - abK; i++) {
    result.push(arr[i]);
  }
  return result;
}

console.log(cyclicallyRotateByN([6, 4, 3, 8], 1));
console.log(cyclicallyRotateByN([6, 4, 3, 8], 9));
console.log(cyclicallyRotateByN([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 2));
console.log(cyclicallyRotateByN([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
