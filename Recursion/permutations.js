function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function permutations(nums, ans, index) {
    if (index > nums.length - 1) {
        ans.push([...nums]);
        return;
    }

    for (let j = index; j < nums.length; j++) {
        swap(nums, index, j);
        // [(nums[index], nums[j])] = [nums[j], nums[index]];
        permutations(nums, ans, index + 1);
        swap(nums, index, j);
        // [nums[index], nums[j]] = [nums[j], nums[index]]; // Backtrack
    }

    return ans;
}

console.log(permutations(nums, [], 0));
