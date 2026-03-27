class Solution {
    public boolean bfs(ArrayList<ArrayList<Integer>> adj,boolean[] vis){
        Queue<int[]> q=new LinkedList<>();
        //boolean[] vis=new boolean[];
        int snode=0;
        vis[snode]=true;
        q.add(new int[]{snode,-1});
        while(!q.isEmpty()){
            int n=q.peek()[0];
            int par=q.peek()[1];
            q.poll();
            for(int node:adj.get(n)){
                if(!vis[node]){
                    vis[node]=true;
                    q.add(new int[] {node,n});
                }
                else if(node!=par) return true;
            }
        }
    return false;
}
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        //if there's a loop then course can't be completed
        int V=numCourses;
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for(int i=0;i<V;i++){
            adj.add(new ArrayList<>());
        }
        for(int[] e : prerequisites){
            adj.get(e[1]).add(e[0]);
        }
        
        boolean[] vis=new boolean[V];
        for(int i=0;i<V;i++){
            if(!vis[i]){
                if(bfs(adj,vis)) return true;
            }
        }
        return false;        
    }
}