class Solution {
    findKRotation(nums) {
    let ans=Infinity;
    let ind_of_min=Infinity;
    let low=0;
    let high=nums.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(nums[low]<=nums[high]){
        if(nums[low]<ans){
            ind_of_min=low;
            ans=nums[low];      
        }
        break;
        }
        if(nums[low]<=nums[mid]){
            if(nums[low]<ans){
                ind_of_min=low;
                ans=nums[low];
            }
        low=mid+1;
        }
        else{
            high=mid-1;
            if(nums[mid]<ans){
                ind_of_min=mid;
                ans=nums[mid];
            }
        }
    }
    return ind_of_min;
};
    }