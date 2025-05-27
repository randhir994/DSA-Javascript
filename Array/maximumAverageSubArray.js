//https://leetcode.com/problems/maximum-average-subarray-i/

//Sliding window
function maximumAverageSubArray(arr, k) {
    let i = 0;
    let j = k - 1;
    let sum = 0;
    //first window sum

    for (let i = 0; i <= j; i++) {
        sum += arr[i];
    }

    let maxSum = sum;

    j++;
    while (j < arr.length) {
        sum -= arr[i++];
        sum+=arr[j++];
        maxSum = Math.max(maxSum,sum);
    }

   return maxSum/k;


}

console.log(maximumAverageSubArray([1, 12, -5, -6, 50, 3], 4));
console.log(maximumAverageSubArray([5], 1));
