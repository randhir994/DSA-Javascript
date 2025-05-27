function wavePrintMatrix(arr) {
    let row = arr.length;
    let col = arr[0].length;

    for (let currentCol = 0; i < col; currentCol++) {
        if ((i & 1) === 0) {
            //print top to bottom
            for (let j = 0; j < row; j++) {
                console.log(arr[j][currentCol]);
            }
        } else {
            //print bottom to top
            for (let j = row - 1; j >= 0; j--) {
                console.log(arr[j][currentCol]);
            }
        }
    }
}

wavePrintMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]);
