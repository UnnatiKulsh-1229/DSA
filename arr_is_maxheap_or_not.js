class Solution {
    isMaxHeap(n, arr) {
        // code here
        for(let i=0;i<Math.floor(n/2) ;i++){
            let l=2*i+1;
            let r=2*i+2;
            if(l<n && arr[l]>arr[i] ){
                return false;
            }
            if(r<n && arr[r]>arr[i]){
                return false;
            }
        }
        return true;
    }
}
