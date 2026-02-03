class Solution {
    public void postorder(TreeNode root,List<Integer> arr){
        if(root==null) return;
        postorder(root.left,arr);
        postorder(root.right,arr);
        arr.add(root.val);
    }
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> res=new ArrayList<>();
        postorder(root,res);
        return res;
        }
}