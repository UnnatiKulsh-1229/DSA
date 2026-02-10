class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> res=new ArrayList<>();
        if(root==null) return res;
        Queue<TreeNode> q=new LinkedList<>();
        q.offer(root);
        boolean direc=true;
        while(!q.isEmpty()){
            int size=q.size();
            Integer[] lvl=new Integer[size];
            for(int i=0;i<size;i++){
                TreeNode n=q.poll();
                int idx = direc ? i : size - 1 - i;
                lvl[idx]=n.val;
                if(n.left!=null) q.offer(n.left);
                if(n.right!=null) q.offer(n.right);
            }
            direc=!direc;
            res.add(Arrays.asList(lvl));
        }
        return res;
    }
}