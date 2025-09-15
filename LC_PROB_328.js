var oddEvenList = function(head) {
    if(head===null || head.next===null) return head;
    let res=new Array();
    let temp=head;
    while(temp!==null && temp.next!==null){
        res.push(temp.val);
        temp=temp.next.next;
    }
    if(temp!==null)   res.push(temp.val);
    temp=head.next;
    while(temp!==null && temp.next!==null){
        res.push(temp.val);
        temp=temp.next.next;
    }
    if(temp!==null)   res.push(temp.val);
    temp=head;
    let i=0;
    while(temp!==null){
        temp.val=res[i];
        i++;
        temp=temp.next;
    }
    return head;
};