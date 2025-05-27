//https://leetcode.com/problems/reverse-integer/description/

function reverseInteger(n) {
    let ans = 0;
    let isNegative = false;
    if (n < 0) {
        n = -n;
        isNegative = true;
    }

    while (n > 0) {
        const digit = n % 10;
        ans = ans * 10 + digit;
        n = parseInt(n / 10);
    }

    return isNegative ? -ans : ans;
}

//reverse with constrain

function reverseInteger(x) {
    let ans = 0;
    let isNegative = false;

    if (x < 0) {
        x *= -1;
        isNegative = true;
    }

    while (x > 0) {
        const digit = x % 10;
        ans = ans * 10 + digit;
        x = parseInt(x / 10);
    }

    ans = isNegative ? -1 * ans : ans;

    const range = Math.pow(2, 31);

    if (ans > range - 1 || ans < -range) {
        return 0;
    }

    return ans;
}

console.log(reverseInteger(123));
console.log(reverseInteger(-123));
