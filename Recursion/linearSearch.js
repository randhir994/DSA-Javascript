function linearSearch(arr, target, index) {
    if (index > arr.length - 1) {
        return false;
    }

    if (arr[index] === target) {
        return true;
    }

    return linearSearch(arr, target, index + 1);
}

console.log(linearSearch([1, 2, 3, 4, 5], 6, 0));
console.log(linearSearch([1, 2, 3, 4, 5], 3, 0));
