var longestCommonPrefix = function(strs) {
    let res="";
    let pref=strs[0];
    for (let i=1;i<strs.length;i++){
        let s=strs[i];
        while (!s.startsWith(pref)) {
            pref = pref.slice(0, -1); 
            if (pref === "") return "";
        }
    }
    return pref;
    };