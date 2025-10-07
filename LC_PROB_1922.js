var countGoodNumbers = function(n) {
    const evenDigits = [0, 2, 4, 6, 8];
    const primeDigits = [2, 3, 5, 7];
    function helper(pos) {
        if (pos === n) return 1;
        let count = 0;
        const choices = pos % 2 === 0 ? evenDigits : primeDigits;
        for (let _ of choices) {
            count += helper(pos + 1);
        }
        return count;
    }
    return helper(0);
    
};