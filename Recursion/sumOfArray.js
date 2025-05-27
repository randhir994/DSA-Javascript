function sumOfArray(arr, sum, index) {
    if (index > arr.length - 1) {
        return sum;
    }

    sum += arr[index];
    return sumOfArray(arr, sum, index + 1);
}

console.log(sumOfArray([3, 2, 5, 1, 6], 0, 0));
