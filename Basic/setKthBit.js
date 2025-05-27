//gfg
//https://practice.geeksforgeeks.org/problems/set-kth-bit3724/1

function setKthBit(n, k) {
    return n | (1 << k);
}

console.log(setKthBit(10, 2));
console.log(setKthBit(15, 3));

