// https://leetcode.com/problems/sort-colors/

//TC: O(nlogn) SC:O(n)
// function sort012(arr){
//     return arr.sort((a,b)=>a-b);
// }

//TC: O(n) SC:O(1)
// function sort012(arr) {
//     let zero = 0;
//     let one = 0;
//     let two = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             zero++;
//         }
//         if (arr[i] === 1) {
//             one++;
//         }
//         if (arr[i] === 2) {
//             two++;
//         }
//     }

//     console.log(zero, one, two);

//     let i = 0;
//     while (zero) {
//         arr[i] = 0;
//         i++;
//         zero--;
//     }
//     while (one) {
//         arr[i] = 1;
//         i++;
//         one--;
//     }
//     while (two) {
//         arr[i] = 2;
//         i++;
//         two--;
//     }

//     return arr;
// }

//TC: O(n) SC:O(1)
//3 pointer approch
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sort012(arr) {
    let l = 0;
    let m = 0;
    let h = arr.length - 1;

    while (m < h) {
        if (arr[m] === 0) {
            swap(arr, l, m);
            l++;
            m++;
        } else if (arr[m] === 1) {
            m++;
        } else {
            swap(arr, m, h);
            h--;
        }
    }
    return arr;
}

console.log(sort012([2, 0, 2, 1, 1, 0]));
console.log(sort012([1, 1, 0, 2, 0, 1, 2, 0, 1]));
console.log(sort012([2, 0, 1]));
