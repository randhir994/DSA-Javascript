//https://leetcode.com/problems/search-in-rotated-sorted-array/
function getPivotIndex(nums) {
    let s = 0;
    let e = nums.length - 1;

    let mid = parseInt((s + e) / 2);

    while (s < e) {
        if (nums[mid] >= nums[0]) {
            s = mid + 1;
        } else {
            e = mid;
        }

        mid = parseInt((s + e) / 2);
    }

    return s;
}

function binarySearch(nums, s, e, target) {
    let mid = parseInt((s + e) / 2);

    while (s <= e) {
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            s = mid + 1;
        } else {
            e = mid - 1;
        }

        mid = parseInt((s + e) / 2);
    }

    return -1;
}
var search = function (nums, target) {
    const pivotIndex = getPivotIndex(nums);
    const lastIndex = nums.length - 1;

    if (target >= nums[pivotIndex] && target <= nums[lastIndex]) {
        return binarySearch(nums, pivotIndex, lastIndex, target);
    } else {
        return binarySearch(nums, 0, pivotIndex - 1, target);
    }
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([3, 1], 1));
