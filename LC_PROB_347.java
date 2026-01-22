//Solution using heap
import java.util.*;
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        HashMap<Integer,Integer> map=new HashMap<>();
        for(int num:nums){
            map.put(num,map.getOrDefault(num,0)+1);
        }
        PriorityQueue<int[]> p=new PriorityQueue<>((a,b)->a[0]==b[0]?a[1]-b[1]:a[0]-b[0]);
        for(Map.Entry<Integer,Integer> entry:map.entrySet()){
            p.add(new int[]{entry.getValue(),entry.getKey()});
            if(p.size()>k) p.poll();
        }
        int[] res=new int[k];
        int idx=0;
        while(!p.isEmpty()){
            res[idx++]=p.poll()[1];
        }
        return res;

    }
}