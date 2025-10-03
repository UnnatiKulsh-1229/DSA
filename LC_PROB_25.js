var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;
    function getKth(curr, k) {
        while (curr && k > 0) {
            curr = curr.next;
            k--;
        }
        return curr;
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let groupPrev = dummy;

    while (true) {
        let kth = getKth(groupPrev, k);
        if (!kth) break;  
        let groupNext = kth.next;
        let prev = kth.next;
        let curr = groupPrev.next;

        while (curr !== groupNext) {
            let tmp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmp;
        }

        let tmp = groupPrev.next;  
        groupPrev.next = kth;      
        groupPrev = tmp;           
    }
    return dummy.next;
};
