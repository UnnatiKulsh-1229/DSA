class Solution {
    public ArrayList<Integer> topoSort(int V, int[][] edges) {
        // code here
        //convert edges to adj list
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for(int i=0;i<V;i++){
            adj.add(new ArrayList<>());
        }
        for(int[] e : edges){
            adj.get(e[0]).add(e[1]);
        }
        //creating indeg
        int[] indegree=new int[V];
            for(int[] edge:edges){
                indegree[edge[1]]++;
            }
        Queue<Integer> q=new LinkedList<>();
        for(int i=0;i<V;i++){
            if(indegree[i]==0) q.add(i);
        }
        ArrayList<Integer> top=new ArrayList<>();
        int t=0;
        while(!q.isEmpty()){
            int n = q.poll();
            top.add(n);

            for(int it : adj.get(n)){
                indegree[it]--;
                if(indegree[it] == 0) q.add(it);
            }
        }
        return top;
    }
}