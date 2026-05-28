class Solution {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        //make adj
        ArrayList<ArrayList<int[]>> adj=new ArrayList<>();
        for(int i=0;i<n;i++){
            adj.add(new ArrayList<>());
        }
        for(int[] e:flights){
            adj.get(e[0]).add(new int[]{e[1],e[2]}); //src to dest,price
        }
        Queue<int[]> q=new LinkedList<>();
        q.offer(new int[]{0,src,0});
        int[] dist=new int[n];
        Arrays.fill(dist,Integer.MAX_VALUE);
        dist[src]=0;
        while(!q.isEmpty()){
            int[]  curr=q.poll();
            int stops=curr[0];
            int s=curr[1];
            int price=curr[2];
            if(stops>k) continue;
            for(int[] a: adj.get(s)){
                int next_n=a[0];
                int new_cost=a[1];
                if(price + new_cost<dist[next_n] && stops<=k){
                    dist[next_n]=price+new_cost;
                    q.offer(new int[]{stops+1,next_n,price+new_cost});
                }
            }
        }
        if(dist[dst]==Integer.MAX_VALUE) return -1;
        return dist[dst];
    }
}