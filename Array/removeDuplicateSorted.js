// https://leetcode.com/problems/remove-duplicates-from-sorted-array
// remove the duplicates in-place
function removeDuplicateSorted(arr) {
    let i = 0;
    let j = 1;

    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            j++;
        } else {
            i++;
            arr[i] = arr[j];
            j++;
        }
    }

    return i + 1;
}

console.log(removeDuplicateSorted([1, 1, 2]));
console.log(removeDuplicateSorted([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
