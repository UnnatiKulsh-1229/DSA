//topological sort of a graph using dfs
class Solution {
    public void dfs(int n,boolean[]vis,Stack<Integer> s, 
    ArrayList<ArrayList<Integer>> adj){
        //int n=adj.length();
        vis[n]=true;
        for(int i:adj.get(n)){
            if(!vis[i])dfs(i,vis,s,adj);
        }
        s.push(n);      
    }
    public ArrayList<Integer> topoSort(int V, int[][] edges) {
        // code here
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for(int i=0; i < V; i++){
        adj.add(new ArrayList<>());
        }
        for(int[] e : edges){
        adj.get(e[0]).add(e[1]);
        }
        boolean[] vis=new boolean[V];
        Stack<Integer> s=new Stack<>();
        for(int i=0;i<V;i++){
            if(!vis[i]) dfs(i,vis,s,adj);
        }
        ArrayList<Integer> res=new ArrayList<>();
        int sn=0;
        while(!s.isEmpty()){
            res.add(s.pop());
        }
        return res;
    }
}