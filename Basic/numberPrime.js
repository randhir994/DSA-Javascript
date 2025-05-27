// function numberIsPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return "Non Prime";
//         }
//     }

//     return "Prime";
// }

//optimsed solutuon
function numberIsPrime(n) {
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return "Non Prime";
        }
    }

    return "Prime";
}


console.log(numberIsPrime(4));
console.log(numberIsPrime(5));
console.log(numberIsPrime(503));
console.log(numberIsPrime(5030));