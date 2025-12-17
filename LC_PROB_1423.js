var maxScore = function(cardPoints, k) {
    let sum=0;
    let lsum=0;
    let rsum=0;
    for(let i=0;i<k;i++){
        lsum+=cardPoints[i];
    }
    sum=lsum;
    let ridx=cardPoints.length-1;
    for(let i=k-1;i>=0;i--){
        lsum-=cardPoints[i];
        rsum+=cardPoints[ridx];
        ridx--;
        sum=Math.max(sum,lsum+rsum);
    }
return sum;
};