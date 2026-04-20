class Solution {
    public int maxDistance(int[] colors) {
        int n=colors.length;
        int d=0;
        int max_d=0;
        for(int i=0;i<n;++i){
            for(int j=i+1;j<n;++j){
                if(colors[i]!=colors[j]) {
                    d=Math.abs(i-j);
                    max_d=Math.max(d,max_d);
                }
            }
        }
        return max_d;
    }
}