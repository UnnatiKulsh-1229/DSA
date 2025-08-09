var maxSubArray = function(nums) {
    let res=nums[0];
    let max_end=nums[0];
    for(let i=1;i<nums.length;i++){
        max_end=Math.max(max_end+nums[i],nums[i]);
        res=Math.max(res,max_end);
    }
    return res;
};