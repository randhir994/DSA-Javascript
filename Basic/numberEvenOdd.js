// function numberEvenOdd(n) {
//     if (n % 2 === 0) return "Even";
//     return "odd";
// }

//Bitwise

function numberEvenOdd(n) {
    if ((n & 1 )=== 0) return "Even";
    return "odd";
}

console.log(numberEvenOdd(4));
console.log(numberEvenOdd(5));
