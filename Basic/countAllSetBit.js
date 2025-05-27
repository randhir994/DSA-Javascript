// function countAllSetBit(n){

//     let count = 0;

//     while(n>0){
//         const rem = n%2;
//         if(rem === 1){
//             count++;
//         }

//         n=parseInt(n/2)
//     }

//     return count;
// }

//bitwise
function countAllSetBit(n){

    let count = 0;

    while(n>0){
        const bit = n&1;
        if(bit === 1){
            count++;
        }

        n=n>>1;
    }

    return count;
}

console.log(countAllSetBit(34));
console.log(countAllSetBit(7));
console.log(countAllSetBit(7865));