var lengthOfLongestSubstring = function(s) {
    let hash=new Map();
    let l=0;
    let r=0;
    let maxlen=0;
    while(r<s.length){
        if(hash[s[r]]>=0){
            if(hash[s[r]]>=l){
                l=hash[s[r]]+1;
            }
        }
        let len=r-l+1;
        maxlen=Math.max(maxlen,len);
        hash[s[r]]=r;
        r++;
    }
    return maxlen;
};
