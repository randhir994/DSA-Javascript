//https://leetcode.com/problems/complement-of-base-10-integer/
const bitwiseComplement = function (n) {
    const nBinary = n.toString(2);
    const nBitwise = nBinary.split('').map(x => x === '1' ? '0' : '1').join("");
    console.log(nBitwise);
    return parseInt(nBitwise,2);
};

console.log(bitwiseComplement(5)); //2
console.log(bitwiseComplement(7)); //0
console.log(bitwiseComplement(10)); //5