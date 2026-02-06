class Solution {
    public int maxDepth(TreeNode root) {
        if(root==null) return 0;
        Queue<TreeNode> q=new LinkedList<>();
        int lvl=0;
        q.add(root);
        while(!q.isEmpty()){
            int size=q.size();
            for(int i=0;i<size;i++){
                TreeNode front=q.poll();
            if(front.left!=null) q.add(front.left);
            if(front.right!=null) q.add(front.right);
        }
        lvl++;
        }
        return lvl;
    }
}