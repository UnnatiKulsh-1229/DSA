import java.util.PriorityQueue;
class Solution {
    public void nearlySorted(int[] arr, int k) {
        // code here
        int n=arr.length;
        PriorityQueue<Integer> p=new PriorityQueue<>();
        for(int i=0;i<=k&& i<n;i++){
            p.add(arr[i]);
        }
        int idx=0;
        for(int i=k+1;i<n;i++){
            arr[idx++]=p.poll();
            p.add(arr[i]);
        }
        while(!p.isEmpty()){
            arr[idx++]=p.poll();
        }
    }
}
