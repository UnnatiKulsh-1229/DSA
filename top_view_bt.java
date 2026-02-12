
class Solution {
    public ArrayList<Integer> topView(Node root) {
        // code here
        ArrayList<Integer> res=new ArrayList<>();
        if(root==null) return res;
        Map<Integer,Integer> map=new TreeMap<>();
        Queue<AbstractMap.SimpleEntry<Node, Integer>> q = new LinkedList<>();
        q.add(new AbstractMap.SimpleEntry<>(root, 0));
        while(!q.isEmpty()){
            AbstractMap.SimpleEntry<Node, Integer> entry = q.poll();
            Node node = entry.getKey();
            int line = entry.getValue();
            if(!map.containsKey(line)) {
                map.put(line, node.data);
            }
            if (node.left != null) {
                q.add(new AbstractMap.SimpleEntry<>(node.left, line - 1));
            }
            if (node.right != null) {
                q.add(new AbstractMap.SimpleEntry<>(node.right, line + 1));
            }
        }
        for (int val : map.values()) {
            res.add(val);
        }
        return res;
        }
    }
