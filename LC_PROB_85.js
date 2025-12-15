/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let maxarea = 0;

    let presum = new Array(n).fill(0).map(() => new Array(m).fill(0));

    for (let j = 0; j < m; j++) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            let val = matrix[i][j] === "1" ? 1 : 0;
            sum += val;
            if (val === 0) sum = 0;
            presum[i][j] = sum;
        }
    }
    for (let i = 0; i < n; i++) {
        maxarea = Math.max(maxarea, lhist(presum[i]));
    }

    return maxarea;

    function lhist(heights) {
        let n = heights.length;
        let stack = [];
      LC  let maxArea = 0;

        for (let i = 0; i <= n; i++) {
            let h = i === n ? 0 : heights[i];

            while (stack.length > 0 && heights[stack[stack.length - 1]] > h) {
                let height = heights[stack.pop()];
                let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea, height * width);
            }

            stack.push(i);
        }
        return maxArea;
    }
};
