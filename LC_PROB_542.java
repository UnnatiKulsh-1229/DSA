class Solution {
    public int[][] updateMatrix(int[][] mat) {
        int n=mat.length;
        int m=mat[0].length;
        int[][] res=new int[n][m];
        int[][] vis=new int[n][m];
        Queue<int[]>q=new LinkedList<>();
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(mat[i][j]==0) {
                    res[i][j]=1;
                    q.add(new int[] {i,j,0});
                    vis[i][j]=1;
                }
                else{
                    vis[i][j]=0;
                }
            }
        }
        int[] delrow = {-1, 0, 1, 0};
        int[] delcol = {0, 1, 0, -1};
        while(!q.isEmpty()){
            int[] cell=q.poll();
            int r=cell[0];
            int c=cell[1];
            int dis=cell[2];
            res[r][c]=dis;
            for(int i=0;i<4;i++){
                int nr=r+delrow[i];
                int nc=c+delcol[i];
                if (nr >= 0 && nr < n && nc >= 0 && nc < m && vis[nr][nc] == 0) {
                    vis[nr][nc] = 1;
                    q.add(new int[]{nr, nc, dis + 1}); 
                }
            }
        }
        return res;
    }
}