function coinChange(arr, amount, currentCoin) {
  if (amount === 0) return 1;
  if (amount < 0) return 0;

  let ways = 0;

  for (let i = currentCoin; i < arr.length; i++) {
    ways += coinChange(arr, amount - arr[i], i);
  }
  return ways;
}

console.log(coinChange([1, 2], 4, 0));
