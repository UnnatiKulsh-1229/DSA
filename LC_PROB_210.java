class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        //adj list
        ArrayList< ArrayList<Integer>> adj=new ArrayList<>();
        for(int i=0;i<numCourses;i++){
            adj.add(new ArrayList<Integer>());
        }
        for(int e[]:prerequisites){
            adj.get(e[1]).add(e[0]);
        }
        Queue<Integer> q=new LinkedList<>();
        //counting prerequisites for each course
        int[] indegree=new int[numCourses];
        for(int i=0;i<numCourses;i++){
    for(int v: adj.get(i)){
        indegree[v]++;
    }
}
    //ushing each course with no prerequisites into the queue
    for(int i=0;i<numCourses;i++){
            if (indegree[i] == 0) {
                q.offer(i);
            }
        }
        int[] order = new int[numCourses];
        int idx = 0;
         while (!q.isEmpty()) {
            int node = q.poll();
            order[idx++] = node;
            for (int n : adj.get(node)) {
                indegree[n]--;
                if (indegree[n] == 0) {
                    q.offer(n);
                }
            }
        }
        if (idx == numCourses) return order;
        return new int[0];

    }
}