//Rotten oranges 
// use bfs

class Solution {
    public int orangesRotting(int[][] grid) {
        Queue<int[]> q=new LinkedList<>();
        int total=0;
        int cnt=0;
        int time=0;
        if(grid.length==0) return 0;
        int n=grid.length;
        int m=grid[0].length;
        //store rooten pos in new 2d matrix
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(grid[i][j]!=0) total++;
                if(grid[i][j]==2){
                    q.add(new int[]{i,j});
                }
            }
        }
        int[] x_a={0,0,1,-1};
        int[] y_a={1,-1,0,0};
        while(!q.isEmpty()){
            int k=q.size();
            cnt+=k;
            for(int i=0;i<k;i++){
                int[] pos=q.poll();
                int x = pos[0], y = pos[1];
                 for (int d = 0; d < 4; d++) {
                    int nx = x + x_a[d];
                    int ny = y + y_a[d];
                    if (nx < 0 || ny < 0 || nx >= n || ny >= m || grid[nx][ny] != 1)                    continue;
                    grid[nx][ny]=2;
                    q.add(new int[]{nx,ny});
            }
        }
        if (!q.isEmpty()) time++;
    }
    return total == cnt ? time : -1;
}
}
