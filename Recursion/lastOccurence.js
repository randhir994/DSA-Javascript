//left to Right

// function lastOccurance(str, target, index, ans) {
//     if (index > str.length) {
//         return ans;
//     }

//     if (str[index] === target) {
//         ans = index;
//     }

//     return lastOccurance(str, target, index + 1, ans);
// }

//Right to Left
function lastOccurance(str, target, index, ans) {
    if (index < 0) {
        return ans;
    }

    if (str[index] === target) {
        return index;
    }

    return lastOccurance(str, target, index - 1, ans);
}

let ans = -1;
let str = "abcdedg";
console.log(lastOccurance(str, "d", str.length, ans));
