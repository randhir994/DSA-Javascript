function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
//Dutch National Flag or 2 pointer approch
//TC: O(n) SC:O(1)

function sort01(arr) {
    let l = 0;
    let h = arr.length - 1;

    while (l < h) {
        if (arr[l] === 0) {
            l++;
        } else if (arr[h] === 1) {
            h--;
        } else {
            swap(arr, l, h);
        }
    }

    return arr;
}

console.log(sort01([0, 1, 1, 0]));
console.log(sort01([1, 1, 0, 0, 1, 0, 1]));
console.log(sort01([1, 0, 1]));
