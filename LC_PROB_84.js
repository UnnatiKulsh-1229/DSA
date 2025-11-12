var largestRectangleArea = function(heights) {
    let n=heights.length;
   

    //main code
    let stack=[];
    let max_area=0;
    for(let i=0;i<n-1;i++){
        while(stack.length!==0 && heights[stack[stack.length-1]]>heights[i]){
            elem=stack[stack.length-1];
            stack.pop();
            let Nse=i;
            let Pse=stack.length===0?-1:stack[stack.length-1];
            max_area=Math.max(max_area,heights[elem]*(Nse-Pse-1));
            }
            stack.push(i);
    }
    while(stack!==0){
        let nse=n;
        let elem=stack[stack.length-1];
        stack.pop();
        let pse=stack.length===0?-1:stack[stack.length-1];
        max_area=Math.max(max_area,heights[elem]*(nse-pse-1));
    }
    return max_area;
};