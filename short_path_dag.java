// Shortest path in a directed acyclic graph (DAG) with positive weights
//do a topo sort for this dag
import java.util.*;

class Solution {
    private void topo(int node, List<List<int[]>> adj, boolean[] visited, Stack<Integer> stack) {
        visited[node] = true;
        for (int[] neighbor : adj.get(node)) {
            if (!visited[neighbor[0]]) {
                topo(neighbor[0], adj, visited, stack);
            }
        }
        stack.push(node);
    }
    public int[] shortestPath(int V, int E, int[][] edges) {
        // adjacency list (node, weight)
        List<List<int[]>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] e : edges) {
            int u = e[0];
            int v = e[1];
            int wt = e[2];
            adj.get(u).add(new int[]{v, wt});
        }
        // topo sort
        boolean[] vis = new boolean[V];
        Stack<Integer> stack = new Stack<>();
        for (int i = 0; i < V; i++) {
            if (!vis[i]) topo(i, adj, vis, stack);
        }
        // distance array
        int[] dist = new int[V];
        Arrays.fill(dist, (int)1e9);
        dist[0] = 0;
        while (!stack.isEmpty()) {
            int node = stack.pop();
            if (dist[node] != (int)1e9) {
                for (int[] neighbor : adj.get(node)) {
                    int v = neighbor[0];
                    int wt = neighbor[1];
                    if (dist[node] + wt < dist[v]) dist[v] = dist[node] + wt;
                    }
                }
        }
        for (int i = 0; i < V; i++) {
            if (dist[i] == (int)1e9) dist[i] = -1;
        }
        return dist;
    }
}