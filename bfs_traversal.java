
        int v=adj.size();
        boolean[] vis=new boolean[v];
        int snode=0;
        vis[snode]=true;
        Queue<Integer> q=new LinkedList<>();
        q.add(snode);
        ArrayList<Integer> res=new ArrayList<>();
        while(!q.isEmpty()){
            int temp=q.poll();
            res.add(temp);
            for(int x:adj.get(temp)){
                if(!vis[x]){
                    vis[x]=true;
                    q.add(x);
                }
            }
        }
        return res;