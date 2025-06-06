/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
 function reqd_days(arr,capacity){
    let day=1;
    let load=0;
    for(let i=0;i<arr.length;i++){
        if(load+arr[i]> capacity){
            day+=1;
            load=arr[i];
        }
        else{
            load+=arr[i];
        }
    }
        return day;
    
 }
 var shipWithinDays = function(weights, days) {
    let low=Math.max(...weights);
    let sum=0;
    for(let i=0;i<weights.length;i++){
        sum+=weights[i]
    }
    let high=sum;
    let ans=high;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        req_days=reqd_days(weights,mid);
        if(req_days<=days){
            high=mid-1;
            ans=mid;
        }
        else{
            low=mid+1;
        }
    }
        return ans;
};