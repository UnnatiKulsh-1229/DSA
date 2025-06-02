function count_hr(arr, hr) {
    let total_hrs = 0;
    for (let i = 0; i < arr.length; i++) {
        total_hrs += Math.ceil(parseFloat(arr[i]) / parseFloat(hr));
    }
    return total_hrs;
}

var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = Math.max(...piles);

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let total_hrs = count_hr(piles, mid);
        if (total_hrs <= h) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};
