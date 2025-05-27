// https://leetcode.com/problems/two-sum

//TC: O(nlogn) SC:O(1)
// function twoSum(arr, target) {
//     let i = 0;
//     let j = arr.length - 1;
//     const sortedArr = arr.sort((a, b) => a - b);
//     console.log()

//     while(i<j){
//         const currentElSum = sortedArr[i]+sortedArr[j] 
//         if(currentElSum === target){
//             return [i, j];
//         }else if(currentElSum > target){
//             j--;
//         }else{
//             i++;
//         }
//     }

//     return [];
// }

//TC: O(n) SC:O(n)
function twoSum(arr, target) {
    let arrMap = {};

    for(let i=0;i<arr.length;i++){
        const secondNum = target - arr[i];
        if(secondNum in arrMap){
            return [arrMap[secondNum], i];
        }else{
            arrMap[arr[i]] = i;
        }
    }

    return []
}

console.log(twoSum([1, 4, 45, 6, 10, 8], 16));

