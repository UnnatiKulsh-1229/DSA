class Solution {
    public TreeNode deleteNode(TreeNode root, int key) {
        if(root==null) return root;
        if(root.val>key) {
            root.left=deleteNode(root.left,key);
        }
        else if(root.val<key){
            root.right=deleteNode(root.right,key);
        }
        else{
            if(root.left==null) return root.right;
            if(root.right==null) return root.left;
            TreeNode next=getchild(root);
            root.val=next.val;
            root.right=deleteNode(root.right,next.val);
        }
        return root;        
    }
    public TreeNode getchild(TreeNode node){
        node=node.right;
        while(node!=null && node.left!=null){
            node=node.left;
        }
        return  node;
    }
}