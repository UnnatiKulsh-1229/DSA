var deleteDuplicates = function(head) {
    let curr=head;
    while(curr!==null && curr.next !== null){
        if (curr.val === curr.next.val) {
        curr.next=curr.next.next;
        }
        else{
            curr=curr.next;
        }
        }
    return head;
}

    //print
    function print (head){
        let res=[];
        while (head !== null) {
        res.push(head.val);
        head = head.next;
    }
        console.log(res.join(" "));
}