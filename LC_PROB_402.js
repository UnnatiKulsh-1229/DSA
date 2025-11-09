var removeKdigits = function(num, k) {
    let stack=[];
    for(let i=0;i<num.length;i++){
        while (stack.length > 0 && k > 0 && stack[stack.length - 1] > num[i]) {
    stack.pop();
    k--;
}

        stack.push(num[i]);
    }
    while(k>0){
        stack.pop();
        k--;
    }
    if(stack.length===0) return "0";
    let res="";
    while(stack.length>0){
        res+=stack[stack.length-1];
        stack.pop();
    }
    while(res.length!==0 && res[res.length-1]==='0'){
        res = res.slice(0, -1);
        }
    res=res.split("").reverse().join("");
    return res === "" ? "0" : res;

}; 