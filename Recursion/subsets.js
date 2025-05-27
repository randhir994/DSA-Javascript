function subsets(nums, output, ans, index) {
    if (index > nums.length - 1) {
        ans.push(output);
        return;
    }

    //exclude
    subsets(nums, output, ans, index + 1);

    //include
    subsets(nums, [...output, nums[index]], ans, index + 1);
    return ans;
}

console.log(subsets([1, 2, 3], [], [], 0));
