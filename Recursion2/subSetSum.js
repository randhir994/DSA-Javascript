function subSetSum(arr, n, sum) {
  if (sum === 0) return true;

  if (n === 0) return false;

  if (arr[n - 1] > sum) {
    return subSetSum(arr, n - 1, sum);
  }

  return subSetSum(arr, n - 1, sum) || subSetSum(arr, n - 1, sum - arr[n - 1]);
}

let arr = [3, 34, 4, 12, 5, 2];
console.log(subSetSum(arr, arr.length, 9));
