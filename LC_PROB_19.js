var removeNthFromEnd = function(head, n) {
    let fast=head;
    for(let i=0;i<n;i++){
        fast=fast.next;
    }
    if(fast===null) return head.next;
    let slow=head;
    while(fast.next!==null){
        slow=slow.next;
        fast=fast.next;
    }
    let delnode=slow.next;
    slow.next=slow.next.next;
    return head;
};