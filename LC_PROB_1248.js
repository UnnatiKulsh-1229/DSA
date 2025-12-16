function Most(nums, k) {
    let l = 0;
    let cnt = 0;
    let sum = 0;
    for (let r = 0; r < nums.length; r++) {
        sum += nums[r] % 2;
        while (sum > k) {
            sum -= nums[l] % 2;
            l++;
        }
        cnt += (r - l + 1);   
    }
    return cnt;
}
var numberOfSubarrays = function(nums, k) {
    return Most(nums, k) - Most(nums, k - 1);
};
