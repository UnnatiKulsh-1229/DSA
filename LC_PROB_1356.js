var numberOfSubstrings = function(s) {
    let lastseen=new Array(3).fill(-1);
    let cnt=0;
    for(let i=0;i<s.length;i++){
        lastseen[s[i].charCodeAt(0)-'a'.charCodeAt(0)]=i;
        if(lastseen[0]!==-1 && lastseen[1]!==-1 && lastseen[2]!==-1){
            cnt=cnt+(1+ Math.min(lastseen[0],lastseen[1],lastseen[2]));
        }
    }
    return cnt;
};