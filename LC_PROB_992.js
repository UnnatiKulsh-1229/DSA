// brute force solution

var subarraysWithKDistinct = function(nums, k) {
    let cnt=0;
    for(let i=0;i<nums.length;i++){
        let res=new Map();
        for(let j=i;j<nums.length;j++){
            res.set(nums[j],(res.get(nums[j])||0)+1);
            if(res.size===k){
                cnt=cnt+1;
            }
            else if(res.size>k){
                break;
            }
        }
    }
    return cnt;
};

// optimal solution
var subarraysWithKDistinct = function(nums, k) {
    return maxkdistinct(nums,k)-maxkdistinct(nums,k-1);
    function maxkdistinct(nums,k){
    let res=new Map();
    let l=0;
    let cnt=0;
    let maxlen=0
    for(let r=0;r<nums.length;r++){
        res.set(nums[r],(res.get(nums[r])||0)+1);
    
        while(res.size>k){
            res.set(nums[l],res.get(nums[l])-1);
            if(res.get(nums[l])===0)  res.delete(nums[l]);
            l++;
        }
    cnt+=(r-l+1);
}
    return cnt;
};
        
}