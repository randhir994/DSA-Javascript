// function sum(a) {
//     return function (b) {
//         if (b !== undefined) {
//             return sum(a + b);
//         } else {
//             return a;
//         }
//     };
// }

// function sum1(a) {
//     function innerSum(b) {
//         if (b) {
//             return sum(a + b);
//         } else {
//             return a;
//         }
//     }

//     innerSum.valueOf = function () {
//         return a;
//     };

//     return innerSum;
// }

// console.log(sum(1)(2)(3)());
// console.log(sum(1)(2)(3)(5)(6)());
// const result = sum1(1)(2)(3); // Output: 6
// console.log(result.valueOf());

function add(a) {
    function sum(b) {
        a = a + b;
        return sum;
    }
    sum.toString = function () {
        return a;
    };
    return sum;
}
console.log(add(1)(2)(3)(4).toString());
