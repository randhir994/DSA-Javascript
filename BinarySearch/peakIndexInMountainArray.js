//https://leetcode.com/problems/peak-index-in-a-mountain-array/
const peakIndexInMountainArray = function (arr) {
    let s = 0;
    let e = arr.length - 1;
    while (s < e) {
        const mid = parseInt((s + e) / 2);

        if (arr[mid] < arr[mid + 1]) {
            s = mid + 1;
        } else {
            e = mid;
        }
    }

    return s;
};

console.log(peakIndexInMountainArray([0, 1, 0]));
console.log(peakIndexInMountainArray([0, 8, 10, 5, 2]));
