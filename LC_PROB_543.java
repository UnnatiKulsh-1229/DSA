class Solution {
    int dia=0;
    public int diameterOfBinaryTree(TreeNode root) {
        height(root);
        return dia;
    }
    public int height(TreeNode root){
        if(root==null) return 0;
        int l=0;
        int r=0;
        l=height(root.left);
        r=height(root.right);
        dia=Math.max(dia,l+r);
        return 1+ Math.max(r,l);
    }
}