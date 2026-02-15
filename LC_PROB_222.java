class Solution {
    public int countNodes(TreeNode root) {
        int len=0;
        if(root==null) return  0;
        int l=findleft(root);
        int r=findright(root);
        if(l==r) return (1<<l)-1;
        return 1+countNodes(root.left)+countNodes(root.right);
    }
    public int findleft(TreeNode root){
        int h=0;
        while(root!=null){
            h++;
            root=root.left;
        }
        return h;
    }
    public int findright(TreeNode root){
        int h=0;
        while(root!=null){
            h++;
            root=root.right;
        }
        return h;
    }
}