class Solution {
    public int closestTarget(String[] words, String target, int startIndex) {
        int res=Integer.MAX_VALUE;
        for(int i=0;i<words.length;i++){
            if(words[i].equals(target)){
                int dist = Math.abs(i - startIndex);
                int cir_Dist = Math.min(dist, words.length - dist);
                res = Math.min(res, cir_Dist);

            }
        }
    return res == Integer.MAX_VALUE ? -1 : res;
    }
}