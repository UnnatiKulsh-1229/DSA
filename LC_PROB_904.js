// Brute force
var totalFruit = function(fruits) {
    
    let maxlen=0;
    for(let i=0;i<fruits.length;i++){
        let res=new Set();
        for(let j=i;j<fruits.length;j++){
            res.add(fruits[j])
            if(res.size<=2){
                maxlen=Math.max(maxlen,j-i+1);
            }
            else break;
        }
    }
    return maxlen;
};