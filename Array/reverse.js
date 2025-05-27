//reverse array with index apart
function reverseArr(arr, index) {
    let s = index + 1 || 0;
    let e = arr.length - 1;

    while (s < e) {
        [arr[s], arr[e]] = [arr[e], arr[s]];
        s++;
        e--;
    }

    return arr;
}

function reverseArr(arr) {
    return arr.reverse();
}

console.log(reverseArr([1, 2, 3, 4, 5, 6], 2));
console.log(reverseArr([1, 2, 3, 4, 5, 6, 7]));
