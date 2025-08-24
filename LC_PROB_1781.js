var beautySum = function(s) {
    let res = 0;
    let n = s.length;

    for (let i = 0; i < n; i++) {
        let freq = new Array(26).fill(0);

        for (let j = i; j < n; j++) {
            freq[s.charCodeAt(j) - 'a'.charCodeAt(0)]++;

            let maxi = 0, mini = Infinity;
            for (let k = 0; k < 26; k++) {
                if (freq[k] > 0) {
                    maxi = Math.max(maxi, freq[k]);
                    mini = Math.min(mini, freq[k]);
                }
            }

            res += (maxi - mini);
        }
    }

    return res;
};
