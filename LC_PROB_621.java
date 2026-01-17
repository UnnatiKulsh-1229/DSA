class Solution {
    public int leastInterval(char[] tasks, int n) {
        Map<Character,Integer> fre=new HashMap<>();
        for(char task:tasks){
            fre.put(task,fre.getOrDefault(task,0)+1);
        }
        PriorityQueue<Integer> maxheap= new PriorityQueue<>(Collections.reverseOrder());
        for(int count:fre.values()){
            maxheap.add(count);
        }
        int time=0;
        while(!maxheap.isEmpty()){
            List<Integer> res=new ArrayList<>();
            int cycle=n+1;
            int i=0;
            while(i<cycle && !maxheap.isEmpty()){
                int count=maxheap.poll();
                count--;
                if(count>0){
                    res.add(count);
                }
                time++;
                i++;
            }
            for(int rem:res){
                maxheap.add(rem);
            }
            if(!maxheap.isEmpty()){
                time+=(cycle-i);
            }
        }
        return time;
        
    }
}