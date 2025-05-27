//https://leetcode.com/problems/power-of-two/
const isPowerOfTwo = function (n) {
    let ans = 1;
    for (let i = 1; i <= 31; i++) {
        if (n === ans) {
            return true;
        }
        ans *= 2;
    }

    return false;
};

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(6));
console.log(isPowerOfTwo(1));
