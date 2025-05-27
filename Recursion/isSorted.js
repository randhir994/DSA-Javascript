function isSorted(arr, index) {
    if (index > arr.length - 1) {
        return true;
    }
    if (arr.length === 0 || arr.length === 1) {
        return true;
    }

    if (arr[index + 1] < arr[index]) {
        return false;
    }

    return isSorted(arr, index + 1);
}

console.log(isSorted([2, 4, 6, 8, 9], 0));
// console.log(isSorted([2, 4, 1, 6, 8, 9], 0));
