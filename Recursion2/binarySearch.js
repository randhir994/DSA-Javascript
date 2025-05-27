function binarySearch(arr, s, e, target) {
  if (s > e) return -1;

  const mid = parseInt((s + e) / 2);

  if (arr[mid] === target) return mid;

  if (arr[mid] < target) {
    return binarySearch(arr, mid + 1, e, target);
  } else {
    return binarySearch(arr, s, mid - 1, target);
  }
}

let arr = [1, 4, 7, 9, 16, 56, 70];
console.log(binarySearch(arr, 0, arr.length - 1, 70));
