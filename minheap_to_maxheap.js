class Solution {
    minToMaxHeap(nums) {
        function maxheap(n,i,arr){
            let l=2*i+1;
            let r=2*i+2;
            let lar=i;
            if(l<n && arr[l]>arr[lar]){
                lar=l;
            }
            if(r<n && arr[r]>arr[lar]){
                lar=r;
            }
            if(lar!==i){
                [arr[i],arr[lar]]=[arr[lar],arr[i]];
                maxheap(n,lar,arr);
            }
        }
        for(let i=Math.floor(nums.length/2)-1;i>=0;i--){
            maxheap(nums.length,i,nums);
        }
        return nums;
    }
}