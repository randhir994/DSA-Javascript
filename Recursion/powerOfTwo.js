function powerOfTwo(n) {
    if (n <= 0) return 1;

    return 2 * powerOfTwo(n - 1);
}

console.log(powerOfTwo(3));
console.log(powerOfTwo(6));
