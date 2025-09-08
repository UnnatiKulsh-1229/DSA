/*
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}
*/

/**
 * @param {Node} head
 * @return {Node}
 */

class Solution {
    reverse(head) {
        // code here
        if(head===null|| head.next===null) return head;
        let prevnode=null;
        let curr=head;
        while(curr!==null){
            prevnode=curr.prev;
            curr.prev=curr.next;
            curr.next=prevnode;
            curr=curr.prev;
        }
        return prevnode.prev;
        
        
                }
}