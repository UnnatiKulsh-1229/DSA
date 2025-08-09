selectionSort(arr){
        // your code here
        let n=arr.length;
        for(let i=0;i<n;i++){
            let Min=i;
            for(let j=i+1;j<n;j++){
                if(arr[j]<arr[Min]){
                    Min=j;
                }
            }
            let temp=arr[Min];
            arr[Min]=arr[i];
            arr[i]=temp;
        }
        return arr;
}