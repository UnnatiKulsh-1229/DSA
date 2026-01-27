class Solution {
    // Function to find the maximum number of meetings that can
    // be performed in a meeting room.
    public int maxMeetings(int start[], int end[]) {
        // add your code here
        // sort in order of least time taken
        List<int[]> meet=new ArrayList<>();
        for(int i=0;i<start.length;i++){
            meet.add(new int[]{end[i],start[i],i+1});
        }
        meet.sort(Comparator.comparingInt(a->a[0]));
        int res=0;
        int last=-1;
        for(int[] m: meet){
            if(m[1]>last){
                res+=1;
                last=m[0];
            }
        }
        return res;
    }
}
