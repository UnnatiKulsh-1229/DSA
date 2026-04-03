//find shortest path from src to each node in the graph in an undirected graph 
//with each edge having weight 1
class Solution {
    public int[] shortestPath(int V, int[][] edges, int src) {
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] e : edges) {
            adj.get(e[0]).add(e[1]);
            adj.get(e[1]).add(e[0]);
        }
        int[] dist = new int[V];
        Arrays.fill(dist, -1); 
        Queue<Integer> q = new LinkedList<>();
        q.add(src);
        dist[src] = 0;
        while (!q.isEmpty()) {
            int node = q.poll();
            for (int neighbor : adj.get(node)) {
                if (dist[neighbor] == -1) { // If not visited
                    dist[neighbor] = dist[node] + 1;
                    q.add(neighbor);
                }
            }
        }
        return dist;
    }
}
 