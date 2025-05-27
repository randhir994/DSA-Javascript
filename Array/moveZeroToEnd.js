// https://leetcode.com/problems/move-zeroes/
function moveZeroToEnd(arr) {
    let zeroIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[zeroIndex], arr[i]] = [arr[i], arr[zeroIndex]];
            zeroIndex++;
        }
    }

    return arr;
}

console.log(moveZeroToEnd([0, 1, 0, 3, 12]));
