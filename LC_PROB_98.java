// Checks for valid bst using helper function that checks if the value of the current node is within the range of min and max values allowed for that node. The range is updated as we traverse down the tree.
class Solution {
    public boolean isValidBST(TreeNode root) {
        return validate(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }
    public boolean validate(TreeNode root,long min,long max){
        if(root==null) return true;
        if(root.val<=min || root.val>=max) return false;
        return validate(root.left, min, root.val) && validate(root.right, root.val,max);

    }
}