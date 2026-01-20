class Solution {
    public ArrayList<Integer> topKSumPairs(int[] a, int[] b, int k) {
        // code here
       Arrays.sort(a);
       Arrays.sort(b);
       int n=a.length;
       PriorityQueue<int[]> maxheap=new PriorityQueue<>((p,q)->q[0]-p[0]);
       Set<String> vis=new HashSet<>();
       maxheap.offer(new int[]{a[n-1]+b[n-1],n-1,n-1});
       vis.add((n-1)+","+ (n-1));
       ArrayList<Integer> res= new ArrayList<>();
       while(k-->0 && !maxheap.isEmpty()){
           int[] curr= maxheap.poll();  
           int sum=curr[0],i=curr[1],j=curr[2];
           res.add(sum);
           if(i-1>=0){
               String key1=(i-1)+","+(j);
               if(!vis.contains(key1)){
                   maxheap.offer(new int[]{a[i - 1] + b[j], i - 1, j});
                   vis.add(key1);
               }
           }
           if(j-1>=0){
               String key2=(i)+","+ (j-1);
               if(!vis.contains(key2)){
                   maxheap.offer(new int[]{a[i] + b[j-1], i , j-1});
                   vis.add(key2);
               }
           }
       }
       return res;
    }
}