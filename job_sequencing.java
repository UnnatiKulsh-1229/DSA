class Solution {
    public ArrayList<Integer> jobSequencing(int[] deadline, int[] profit) {
        // code here
        int n=deadline.length;
        ArrayList<Integer> res=new ArrayList<>(Arrays.asList(0,0));
        List<int[]> jobs=new ArrayList<>();
        for(int i=0;i<n;i++){
            jobs.add(new int[]{deadline[i],profit[i]});
        }
        //sort jobs 
        jobs.sort(Comparator.comparingInt(a -> a[0]));
        PriorityQueue<Integer> p=new PriorityQueue<>();
         for (int i = 0; i < jobs.size(); i++) {
            int[] job = jobs.get(i);
            if(job[0]>p.size()) p.add(job[1]);
            else if (!p.isEmpty() && p.peek() < job[1]) {
                p.poll();
                p.add(job[1]);
            }
        }
        while(!p.isEmpty()){
            res.set(1,res.get(1)+p.poll());
            res.set(0,res.get(0)+1);
        }
        return res;
}
}