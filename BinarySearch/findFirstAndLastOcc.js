//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
var firstOcc = function (nums, target) {
    let s = 0;
    e = nums.length - 1;
    let ans = -1;

    while (s <= e) {
        const mid = parseInt((s + e) / 2);

        if (nums[mid] === target) {
            ans = mid;
            e = mid - 1;
        } else if (nums[mid] < target) {
            s = mid + 1;
        } else {
            e = mid - 1;
        }
    }

    return ans;
};

var lastOcc = function (nums, target) {
    let s = 0;
    e = nums.length - 1;
    let ans = -1;

    while (s <= e) {
        const mid = parseInt((s + e) / 2);

        if (nums[mid] === target) {
            ans = mid;
            s = mid + 1;
        } else if (nums[mid] < target) {
            s = mid + 1;
        } else {
            e = mid - 1;
        }
    }

    return ans;
};

var searchRange = function (nums, target) {
    return [firstOcc(nums, target), lastOcc(nums, target)];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
