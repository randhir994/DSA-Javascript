function binarySearch(arr, target, s, e) {
    if (s > e) return -1;
    let mid = (s + e) / 2;
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        e = mid - 1;
        return binarySearch(arr, target, s, e);
    } else {
        s = mid + 1;
        return binarySearch(arr, target, s, e);
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 6, 0, 4));
console.log(binarySearch([1, 2, 3, 4, 5], 3, 0, 4));
