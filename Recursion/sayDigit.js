function sayDigit(n, arr) {
    if (n <= 0) return;
    const digit = n % 10;
    n = parseInt(n / 10);

    sayDigit(n, arr);
    console.log(arr[digit]);
}

let numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];

sayDigit(412, numArr);
