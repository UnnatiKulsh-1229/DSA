var longestOnes = function(nums, k) {
    let l=0;
    let maxlen=0;
    let zero=0;
    for(let r=0;r<nums.length;r++){
        if(nums[r]===0) zero++;
        while(zero>k){
            if(nums[l]===0) zero--;
            l++;
        }
        maxlen=Math.max(maxlen,r-l+1);
    }
    return maxlen;
};