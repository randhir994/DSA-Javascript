function swap(arr, i, j) {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}
function reverseString(str, start, end) {
    if (start > end) {
        return str;
    }
    const strArr = str.split("");
    swap(strArr, start, end);
    str = strArr.join("");
    return reverseString(str, start + 1, end - 1);
}

let str = "hello";
console.log(reverseString(str, 0, str.length - 1));
