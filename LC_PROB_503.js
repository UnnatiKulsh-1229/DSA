var nextGreaterElements = function(nums) {
    let stack=[];
    let n=nums.length;
    let nge=new Array(n).fill(-1);
    for(let i=2*n-1;i>=0;i--){
        const num = nums[i % n]; 
        while(stack.length>0 && stack[stack.length-1]<=num){
            stack.pop();
        }
        if(i<n){
            nge[i]=stack.length>0?stack[stack.length-1]:-1;
        }
        stack.push(num);
    }
    return nge;
        
};