//Dutch National Flag or 2 pointer approch
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//TC: O(n) SC:O(1)
function negativeNumberToLeft(arr) {
    let l = 0;
    let h = arr.length - 1;

    while (l < h) {
        if (arr[l] < 0) {
            l++;
        } else if (arr[h] > 0) {
            h--;
        } else {
            swap(arr, l, h);
        }
    }

    return arr;
}

console.log(negativeNumberToLeft([1, 2, -3, 4, -5, 6]));
console.log(negativeNumberToLeft([1, 2, -3, 4, -5, 6, 0, -5, 34, -7]));
