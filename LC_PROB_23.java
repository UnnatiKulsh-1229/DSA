/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue <ListNode> p=new PriorityQueue<>((a, b) -> a.val - b.val);
        for(ListNode node : lists){
            if(node!=null) p.add(node);
        }
        ListNode dummy=new ListNode(0);
        ListNode tail=dummy;
        while(!p.isEmpty()){
            ListNode smallest=p.poll();
            tail.next=smallest;
            tail=tail.next;
            if(smallest.next!=null){
                p.add(smallest.next);
            }
        }
        return dummy.next;
    }
}