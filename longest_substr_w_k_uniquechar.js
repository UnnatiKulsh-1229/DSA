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

//optimal solution
class Solution {
    longestKSubstr(s, k) {
        // code here
        let l=0;
        let r=0;
        let maxlen=-1;
        let res=new Map();
        while(r<s.length){
             res.set(s[r],(res.get(s[r])||0)+1);
             while(res.size>k){
                 res.set(s[l], res.get(s[l]) - 1);
                if (res.get(s[l]) === 0) res.delete(s[l]);
                l++;

             }
             if(res.size===k){
                 maxlen=Math.max(maxlen,r-l+1)
             }
            r++;
        }
    return maxlen;
    }
}
