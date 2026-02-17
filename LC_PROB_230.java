class Solution {
    public void inorder(TreeNode root, ArrayList<Integer> res){
        if(root==null) return;
        inorder(root.left,res);
        res.add(root.val);
        inorder(root.right,res);
        
    }
    public int kthSmallest(TreeNode root, int k) {
        ArrayList<Integer> ans=new ArrayList<>();
        inorder(root,ans);
        return ans.get(k - 1);
    }
}