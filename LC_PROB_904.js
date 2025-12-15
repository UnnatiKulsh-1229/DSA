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

// Optimal sliding window

var totalFruit = function(fruits) {
    let l=0;
    let r=0;
    let res=new Map();
    let maxlen=0;
    while(r<fruits.length){
        res.set(fruits[r], (res.get(fruits[r]) || 0) + 1);
        while(res.size > 2){
                res.set(fruits[l], res.get(fruits[l]) - 1);
                if (res.get(fruits[l]) === 0) {
                res.delete(fruits[l]);
            }
                l++;
        }
        maxlen=Math.max(maxlen,r-l+1);
        r++;
    }
    return maxlen;
};