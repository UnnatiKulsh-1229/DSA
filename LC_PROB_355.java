class Twitter {
    Map<Integer,List<int[]>> tweets;
    Map<Integer,Set<Integer>> following;
    int time=0;
    public Twitter() {
        tweets= new HashMap<>();
        following=new HashMap<>();
    }
    
    public void postTweet(int userId, int tweetId) {
        tweets.putIfAbsent(userId,new ArrayList<>());
        tweets.get(userId).add(new int[]{time++,tweetId});
    }
    

    public List<Integer> getNewsFeed(int userId) {
        PriorityQueue<int[]> p=new PriorityQueue<>((a, b) -> a[0] - b[0]);
        if(tweets.containsKey(userId)){
            for(int[] tweet:tweets.get(userId)){
                p.offer(tweet);
                if(p.size()>10) p.poll();
            }
        }
        if(following.containsKey(userId)){
            for(int follow:following.get(userId)){
                if(tweets.containsKey(follow)){
                    for(int tweet[]:tweets.get(follow)){
                        p.offer(tweet);
                        if(p.size()>10) p.poll();
                    }
                }
            }
        }
        LinkedList<Integer> res = new LinkedList<>();
        while(!p.isEmpty()){
            res.addFirst(p.poll()[1]);
        }
        return res;                
    }
    
    public void follow(int followerId, int followeeId) {
        following.putIfAbsent(followerId,new HashSet<>());
        following.get(followerId).add(followeeId);
    }
    
    public void unfollow(int followerId, int followeeId) {
        if(following.containsKey(followerId)) following.get(followerId).remove(followeeId);
    }
}

