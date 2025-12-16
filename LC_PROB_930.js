var numSubarraysWithSum = function(nums, goal) {
    function Most(nums, goal) {
    if (goal < 0) return 0;
    let l = 0;
    let sum = 0;
    let count = 0;
    for (let r = 0; r < nums.length; r++) {
        sum += nums[r];
        while (sum > goal) {
            sum -= nums[l];
            l++;
        }
        count += (r - l + 1);
    }
    return count;
}
    return Most(nums, goal) - Most(nums, goal - 1);

};
