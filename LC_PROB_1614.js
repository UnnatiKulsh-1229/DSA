var maxDepth = function(s) {
    let curr_max=0;
    let max=0;
    let n=s.length;
    for(let i=0;i<n;i++){
        if (s[i] == '('){
            curr_max++;
            if(curr_max > max){
                max=Math.max(curr_max,max);
            }
        }
        else if(s[i]===')'){
                if(curr_max>0)   curr_max--;
                else{
                    return -1;
                }
            } 
    }
    if(curr_max!==0){
        return -1;
    }
    return max;
};