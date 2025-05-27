function powerAB(a, b) {
    if (b === 0) return 1;
    if (b === 1) return a;

    const ans = powerAB(a, parseInt(b / 2));

    if (b % 2 === 0) {
        return ans * ans;
    } else {
        return a * ans * ans;
    }
}

console.log(powerAB(3, 2));
console.log(powerAB(2, 10));
