//network delay time
class Solution {
    public int networkDelayTime(int[][] times, int n, int k) {
        //make adj   
        ArrayList<ArrayList<int[]>> adj=new ArrayList<>();
        for(int i=0;i<=n;i++){
            adj.add(new ArrayList<>());
        }
        for(int[] t: times){
            adj.get(t[0]).add(new int[]{ t[1],t[2]});
        }
        //find min
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        pq.offer(new int[]{0, k});
        int[] dist=new int[n+1];
        Arrays.fill(dist,Integer.MAX_VALUE);
        dist[k]=0;
        while(!pq.isEmpty()){
            int[] curr=pq.poll();
            int node=curr[1];
            int time=curr[0];
            for(int[] a: adj.get(node)){
                int next_n=a[0];
                int new_time=a[1];
                if (dist[next_n] > time + new_time) {
                    dist[next_n] = time + new_time;
                    pq.offer(new int[]{dist[next_n], next_n});
                }
            }
        }
        int res = 0;
        for (int i = 1; i <= n; i++) {
            if (dist[i] == Integer.MAX_VALUE) return -1;
            res = Math.max(res, dist[i]);
        }
        return res;
    }
}