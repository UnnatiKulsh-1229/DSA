class Solution {
    public int widthOfBinaryTree(TreeNode root) {
        if(root==null) return 0;
        int res=0;
        Queue<Pair<TreeNode,Integer>> q=new LinkedList<>();
        q.offer(new Pair<>(root,0));
        while(!q.isEmpty()){
            int size=q.size();
            int minidx=q.peek().getValue();
            int f=0,l=0;
            for(int i=0;i<size;i++){
                Pair<TreeNode, Integer> p = q.poll();
                TreeNode node = p.getKey();
                int curr = p.getValue() - minidx;
                if(i==0) f=curr;
                if(i==size-1) l=curr;
                if (node.left != null) q.offer(new Pair<>(node.left,2 * curr + 1));
                if (node.right != null) q.offer(new Pair<>(node.right, 2 * curr + 2));
              
            }
        res = Math.max(res, l - f+ 1);
    }
    return res;
}
}