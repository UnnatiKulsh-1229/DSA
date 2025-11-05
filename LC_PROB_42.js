var trap = function(height) {
    let leftmax=0
    let rightmax=0;
    let total=0;
    let left=0;
    let right=height.length-1;
    while(left<right){
        if(height[left]<=height[right]){
            if(leftmax>=height[left]){
                total+=leftmax-height[left];
                }
            else{
                leftmax=height[left];
               }
            left+=1;
            }
        else{
             if(rightmax>height[right]){
                total+=rightmax-height[right];
                }
            else{
                rightmax=height[right];
                }
            right-=1;
            }
        }  
        return total;  
};