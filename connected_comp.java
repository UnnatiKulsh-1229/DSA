class Solution {
    public ArrayList<ArrayList<Integer>> getComponents(int V, int[][] edges) {
        // code here
        boolean[] vis=new boolean[V];
        
        List<List<Integer>> adj=new ArrayList<>();
        for(int i=0;i<V;i++){
            adj.add(new ArrayList<>());
        }
        for(int[] x:edges){
            adj.get(x[0]).add(x[1]);
            adj.get(x[1]).add(x[0]);
        }
        
        ArrayList<ArrayList<Integer>> res=new ArrayList<>();
        for(int i=0;i<V;i++){
            if(vis[i]==false){
                ArrayList<Integer> rel=new ArrayList<>();
                //res.add([i]);
                Queue<Integer> q=new LinkedList<>();
                q.offer(i);
                vis[i]=true;
                while(!q.isEmpty()){
                    int n=q.poll();
                    rel.add(n);
                    for(int node:adj.get(n)){
                        if(vis[node]==false){
                            vis[node]=true;
                            q.offer(node);
                        }
                    }
                }
                res.add(rel);
            }
        }
        return res;
    }
}