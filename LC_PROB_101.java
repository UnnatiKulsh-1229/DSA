class Solution {
    private boolean symmetric(TreeNode r1,TreeNode r2){
        if(r1==null || r2==null) return r1==r2;
        return (r1.val==r2.val) && symmetric(r1.left,r2.right) && symmetric(r1.right,r2.left);
    }
    public boolean isSymmetric(TreeNode root) {
        if(root==null) return true;
        return symmetric(root.left,root.right);
        
    }
}