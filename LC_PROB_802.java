class Solution {
    public List<Integer> eventualSafeNodes(int[][] graph) {
        int n = graph.length;
        //make reverse adj list
        ArrayList<ArrayList<Integer>> adjrev = new ArrayList<>();
        for(int i = 0; i < n; i++){
            adjrev.add(new ArrayList<>());
        }
        int[] indeg = new int[n];
        for(int i = 0; i < n; i++){
            indeg[i] = graph[i].length;
            for(int v : graph[i]){
                adjrev.get(v).add(i);
            }
        }
        Queue<Integer> q = new LinkedList<>();
        for(int i = 0; i < n; i++){
            if(indeg[i] == 0){
                q.add(i);
            }
        }
        List<Integer> res = new ArrayList<>();
        while(!q.isEmpty()){
            int node = q.poll();
            res.add(node);
            for(int v : adjrev.get(node)){
                indeg[v]--;
                if(indeg[v] == 0){
                    q.add(v);
                }
            }
        }
        Collections.sort(res);
        return res;
    }
}
