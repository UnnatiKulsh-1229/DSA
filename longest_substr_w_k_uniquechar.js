// brute force
class Solution {
    longestKSubstr(s, k) {
        // code here
        let res=new Map();
        let maxlen=-1;
        for(let i=0;i<s.length;i++){
            res.clear();
            for(let j=i;j<s.length;j++){
                res.set(s[j], (res.get(s[j]) || 0) + 1);
                if(res.size===k){
                    maxlen=Math.max(maxlen,j-i+1);
                }
                else if(res.size>k) break;
            }
        }
        return maxlen;
    }
}
