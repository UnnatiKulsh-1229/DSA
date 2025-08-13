var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    let map1 = {};
    let map2 = {};

    for (let i = 0; i < s.length; i++) {
        let char1 = s[i];
        let char2 = t[i];

        if ((map1[char1] && map1[char1] !== char2) ||
            (map2[char2] && map2[char2] !== char1)) {
            return false;        
        }

        map1[char1] = char2;
        map2[char2] = char1;
    }
    
    return true;
};