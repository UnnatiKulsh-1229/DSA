var maxSlidingWindow = function(nums, k) {
    //using dequeue as a stack
    let res=[];
    let deq=[];
    for(let i=0;i<nums.length;i++){
        if(deq.length!==0 && deq[0]<=i-k){
            deq.shift();
        }
        while(deq.length!==0 && nums[deq[deq.length-1]]<=nums[i]){
            deq.pop();
        }
        deq.push(i);
        if(i>=k-1) res.push(nums[deq[0]]);
    }
    return res;
    
};