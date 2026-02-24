class Solution {
    public void inorder(TreeNode root,List<Integer> arr){
        if(root==null) return;
        inorder(root.left,arr);
        arr.add(root.val);
        inorder(root.right,arr);
    }
    public boolean findTarget(TreeNode root, int k) {
        //if(root==null) return ;
        List<Integer> res=new ArrayList<>();
        inorder(root,res);
        int l=0;
        int r=res.size()-1;
        while(l<r){
            int curr=res.get(l)+res.get(r);
            if(curr==k) return true;
            else if(curr>k) r--;
            else l++;
        }
        return false;        
    }
}