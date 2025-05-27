function checkPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if ((n % i )=== 0) {
            return false;
        }
    }

    return true;
}

function printPrimeUptoN(n) {
    for (let i = 2; i <= n; i++) {
        if (checkPrime(i)) {
            console.log(i);
        }
    }
}


printPrimeUptoN(5);
console.log("next")
printPrimeUptoN(45);

