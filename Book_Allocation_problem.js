function Cntleast(arr, pages) {
    let stu = 1;
    let pgstu = 0;
    for (let i = 0; i < arr.length; i++) {
        if (pgstu + arr[i] <= pages) {
            pgstu += arr[i];
        } else {
            stu += 1;
            pgstu = arr[i];
        }
    }
    return stu;
}

class Solution {
    findPages(arr, k) {
        let n = arr.length;
        if (k > n) return -1;

        let low = Math.max(...arr);
        let high = arr.reduce((a, b) => a + b, 0);

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let cntstu = Cntleast(arr, mid); 

            if (cntstu > k) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return low;
    }
}
