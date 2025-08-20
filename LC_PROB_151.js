var reverseWords = function(s) {
    res="";
    let words= s.trim().split(/\s+/);
    words.reverse();
    return words.join(" ")
}