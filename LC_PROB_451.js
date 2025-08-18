var frequencySort = function(s) {
    let freq = {};
    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    let res = Object.entries(freq);
    res.sort((a, b) => b[1] - a[1]);
    let result = "";
    for (let [ch, count] of res) {
        result += ch.repeat(count);
    }
    return result;
};

