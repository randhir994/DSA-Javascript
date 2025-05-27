function isPossible(arr, k, mid) {
    let cowCount = 1;
    let lastPos = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - lastPos >= mid) {
            cowCount++;
            if (cowCount === k) {
                return true;
            }
            lastPos = arr[i];
        }
    }

    return false;
}

function aggressiveCows(arr, k) {
    arr.sort((a, b) => a - b);
    let n = arr.length;
    let s = 0;
    let e = arr[n - 1];

    let mid = parseInt((s + e) / 2);
    let ans = -1;

    while (s <= e) {
        if (isPossible(arr, k, mid)) {
            s = mid + 1;
            ans = mid;
        } else {
            e = mid - 1;
        }

        mid = parseInt((s + e) / 2);
    }

    return ans;
}

console.log(aggressiveCows([4, 2, 1, 3, 6], 2)); //5
console.log(aggressiveCows([0, 3, 4, 7, 10, 9], 4)); //3
