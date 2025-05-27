//https://leetcode.com/problems/find-the-duplicate-number/

//TC: O(nlogn) SC:O(n)
// function duplicateNumber(arr) {
//     const sortedArr = arr.sort((a, b) => a - b);
//     for (let i = 0; i < sortedArr.length; i++) {
//         if (sortedArr[i] !== i + 1) {
//             return sortedArr[i];
//         }
//     }
//     return -1;
// }

//TC: O(nlogn) SC:O(n)
function duplicateNumber(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < sortedArr.length-1; i++) {
        if (sortedArr[i] == sortedArr[i + 1]) {
            return sortedArr[i];
        }
    }
    return -1;
}



//TC: O(n) SC:O(1)
//visited logic
// function duplicateNumber(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr[i] *= -1;
//         }

//         if (arr[arr[i]] < 0) {
//             return arr[i];
//         } else {
//             arr[arr[i]] *= -1;
//         }
//     }
//     return -1;
// }

function swap(arr,i,j){
    const temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

//TC: O(n) SC:O(1)
//positioning logic
function duplicateNumber(arr) {
    let i =0;
    while(arr[i] !== arr[arr[i]]){
        swap(arr,i,arr[i])
    }
    return arr[i];
}

//binary search

console.log(duplicateNumber([1, 3, 4, 2, 2]));
console.log(duplicateNumber([3, 1, 3, 4, 2]));


