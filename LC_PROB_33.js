var search = function(nums, target) {
    let n=nums.length;
    let low=0;
    let high=n-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(nums[mid]===target){
            return mid;
        }
        // identify sorted part
        if(nums[low]<=nums[mid]){
            if(nums[low]<=target && target<=nums[mid] ){
                high=mid-1;
            }
            else{
            low=mid+1;
        }
        }
        else{
            if(nums[mid]<=target &&nums[high]>=target ){
                low=mid+1;
            }
            else{
                high=mid-1;
            }
        }
    }
return -1;
};