class Solution {
    private ArrayList<Integer> inorder(Node root,ArrayList<Integer> res){
        if(root==null) return res;
        inorder(root.left,res);
        res.add(root.data);
        inorder(root.right,res);
        return res;
    }
    public int kthSmallest(Node root, int k) {
        // code here
        ArrayList<Integer> res=new ArrayList<>();
        inorder(root,res);
        if(k>res.size()) return -1;
        return res.get(k-1);
        
    }
}