function swapAlternative(arr) {
    for (let i = 0; i < arr.length - 1; i = i + 2) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }

    return arr;
}

console.log(swapAlternative([5, 2, 9, 4, 7, 6, 1, 0]));
console.log(swapAlternative([11, 33, 9, 76, 43]));
