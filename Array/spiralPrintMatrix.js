// https://leetcode.com/problems/spiral-matrix/
function spiralPrintMatrix(arr) {
    let result = [];
    let m = arr.length;
    let n = arr[0].length;

    let startingRow = 0;
    let staringCol = 0;
    let endingCol = n - 1;
    let endRow = m - 1;

    let count = 0;
    let total_Element = m * n;

    while (count < total_Element) {
        //print startingRow
        for (let i = staringCol; i <= endingCol && count < total_Element; i++) {
            result.push(arr[startingRow][i]);
            count++;
        }
        startingRow++;

        //print endingCol
        for (let i = startingRow; i <= endRow && count < total_Element; i++) {
            result.push(arr[i][endingCol]);
            count++;
        }

        endingCol--;

        //print endingRow
        for (let i = endingCol; i >= staringCol && count < total_Element; i--) {
            result.push(arr[endRow][i]);
            count++;
        }

        endRow--;
        //print endingcol
        for (let i = endRow; i >= startingRow && count < total_Element; i--) {
            result.push(arr[i][staringCol]);
            count++;
        }
        staringCol++;

    }

    return result;
}

console.log(
    spiralPrintMatrix([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
    ])
);
