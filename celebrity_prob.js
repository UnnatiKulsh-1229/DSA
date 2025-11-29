//brute force solution
class Solution {
    celebrity(mat) {
        // code here
        let n=mat.length;
        let knowme=new Array(n).fill(0);
        let iknow=new Array(n).fill(0);
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                if(mat[i][j]===1){
                    knowme[j]++;
                    iknow[i]++;
                }
            }
        }
        //traverse array
        for(let i=0;i<n;i++){
                if(knowme[i]===n && iknow[i]===1)
                {
                    return i;
                }
    }
    return -1;
}
}
//two pointer optimal solution

class Solution {
    celebrity(mat) {
        // code here
        let n=mat.length;
        let top=0;
        let bottom=n-1;
        while(top<bottom){
            if(mat[top][bottom]===1){
                top+=1;
            }
            else{
                bottom--;
            }
        }
        let celeb=top;
        for(let i=0;i<n;i++){
            if(i===celeb) continue;
            if (mat[celeb][i]===1 || mat[i][celeb]===0){
            return -1;
            }
        }
        return celeb;
    }
}