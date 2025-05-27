// function deepFlat(arr) {
//     return arr.flat(Infinity);
// }

function deepFlat(arr, level) {
    let result = [];
    arr.forEach((element) => {
        if (Array.isArray(element) && level > 0) {
            result.push(...deepFlat(element, level - 1));
        } else {
            result.push(element);
        }
    });

    return result;
}

console.log(deepFlat([1, 2, [3, [4, [5]]]], 1));
