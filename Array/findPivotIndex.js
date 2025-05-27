// https://leetcode.com/problems/find-pivot-index/submissions/1119452026/
//TC: O(n) SC:O(n)
// function findPivotIndex(arr){
//     let lSum = Array(arr.length).fill(0);
//     let rSum =  Array(arr.length).fill(0);

//     for(let i=1;i<arr.length;i++){
//         lSum[i] = lSum[i-1] + arr[i-1]
//     }

//     for(let i=(arr.length-2);i>=0;i--){
//         rSum[i] = rSum[i+1] + arr[i+1]
//     }

//     for(let i=0;i<arr.length;i++){
//         if(lSum[i] === rSum[i]){
//             return i;
//         }
//     }

//     return -1;
// }
//TC: O(n2) SC:O(1)

function findPivotIndex(arr) {

    for (let i = 0; i < arr.length; i++) {
        let lSum = 0;
        let rSum = 0;
        for (let j = 0; j < i; j++) {
            lSum += arr[j];
        }
        for (let j = i + 1; j < arr.length; j++) {
            rSum += arr[j];
        }

        if (lSum === rSum) {
            return i;
        }
    }

    return -1;
}

console.log(findPivotIndex([1, 7, 3, 6, 5, 6]));
console.log(findPivotIndex([1, 2, 3]));
