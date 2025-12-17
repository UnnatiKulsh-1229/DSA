var characterReplacement = function(s, k) {
    let l=0;
    let maxlen=0;
    let res={};
    let maxfreq=0;
    for (let r = 0; r < s.length; r++) {
        res[s[r]] = (res[s[r]] || 0) + 1;
        maxfreq = Math.max(maxfreq, res[s[r]]);
        while ((r - l + 1) - maxfreq > k) {
            res[s[l]]--;
            l++;
        }
        maxlen=Math.max(maxlen,r-l+1);
    }
    return maxlen;
};LC_PROB