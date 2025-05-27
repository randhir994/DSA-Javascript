// https://practice.geeksforgeeks.org/problems/common-elements1132/1
//TC: O(n) SC:O(n) - min array length

function commonIn3sorted(arr1, arr2, arr3) {
    let i = 0;
    let j = 0;
    let k = 0;

    let result = new Set();;

    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
            result.add(arr1[i]);
            i++;
            j++;
            k++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr3[k]) {
            j++;
        } else {
            k++;
        }
    }

    return result;
}

console.log(
    commonIn3sorted(
        [1, 5, 10, 20, 40, 80],
        [6, 7, 20, 80, 100],
        [3, 4, 15, 20, 30, 70, 80, 120]
    )
);

console.log(commonIn3sorted([3, 3, 3], [3, 3, 3], [3, 3, 3]));
