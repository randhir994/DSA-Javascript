function productOfArrayExceptSelf(arr) {
    let pref = [1];
    let suf = [];
    let result = [];
    suf[arr.length - 1] = 1;

    for (let i = 1; i < arr.length; i++) {
        pref[i] = pref[i - 1] * arr[i - 1];
    }

    for (let i = arr.length - 2; i >= 0; i--) {
        suf[i] = suf[i + 1] * arr[i + 1];
    }

    for (let i = 0; i < arr.length; i++) {
        result[i] = pref[i] * suf[i];
    }

    return result;
}

console.log(productOfArrayExceptSelf([1, 2, 3, 4]));
console.log(productOfArrayExceptSelf([-1, 1, 0, -3, 3]));
