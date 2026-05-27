//find path with least effort
class Solution {
    public int minimumEffortPath(int[][] heights) {
        PriorityQueue<int[]> p=new PriorityQueue<>(Comparator.comparingInt(a->a[0]));
        int n=heights.length;
        int m=heights[0].length;
        int[][] dist=new int[n][m];
        for(int[] r:dist){
            Arrays.fill(r,Integer.MAX_VALUE);
        }
        dist[0][0]=0;
        p.add(new int[]{0,0,0});
        int[] d_r = {-1, 0, 1, 0};
        int[] d_c = {0, 1, 0, -1};
        while(!p.isEmpty()){
            int[] curr=p.poll();
            int dif=curr[0];
            int row=curr[1];
            int col=curr[2];
            if(row==n-1 && col==m-1) return dif;
            for(int i=0;i<4;i++){
                int newr=row+d_r[i];
                int newc=col+ d_c[i];
                if (newr >= 0 && newc >= 0 && newr < n && newc < m) {
                    int new_res=Math.max(Math.abs(heights[row][col]-heights[newr][newc]),dif);
                    if (new_res < dist[newr][newc]) {
                        dist[newr][newc] = new_res;
                        p.add(new int[]{new_res, newr, newc});
                    }
                }
            }
    }
    return 0;
}
}