//TC: O(n) SC:O(1)
//visited logic
// function missingNumberDuplicate(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let index = arr[i];
//         if (index < 0) {
//             index *= -1;
//         }
//         if (arr[index - 1] > 0) {
//             arr[index - 1] *= -1;
//         }
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             return arr[i];
//         }
//     }

//     return -1;
// }

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//swap and sort logic
function missingNumberDuplicate(arr) {
    let i = 0;

    while (i < arr.length) {
        const index = arr[i] - 1;
        if (arr[i] !== arr[index]) {
            swap(arr, i, index);
        } else {
            i++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i+1) {
            return arr[i];
        }
    }

    return -1;
}

console.log(missingNumberDuplicate([1, 3, 5, 3, 4]));
console.log(missingNumberDuplicate([5, 3, 3, 3, 1]));
