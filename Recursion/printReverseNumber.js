function printReverseNumber(n) {
    if (n === 0) return;

    console.log(n);
    printReverseNumber(n - 1);
}

printReverseNumber(5);
