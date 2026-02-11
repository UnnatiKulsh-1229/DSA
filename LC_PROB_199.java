class Solution {
    public void right(TreeNode root,int lvl,List<Integer> res){
        if(root==null) return;
        if(res.size()==lvl) res.add(root.val);
        right(root.right,lvl+1,res);
        right(root.left,lvl+1,res);
    }
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> res=new ArrayList<>();
        right(root,0,res);
        return res;
    }
}