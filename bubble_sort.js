class Solution {
    bubbleSort(arr) {
        // code here
        for(let i=0;i<arr.length-1;i++){
            let swap=false;
            for(let j=0;j<arr.length-i;j++){
                if(arr[j+1]<arr[j]){
                    [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                    swap=true;
                }
            }
            if(swap == false){
                break;
            }
        }
        return arr;
    }
}