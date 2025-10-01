var addTwoNumbers = function(l1, l2) {
    let dummynode=new ListNode(0);
    let temp1=l1;
    let temp2=l2;
    let carry=0;
    let curr=dummynode;
    
    while(temp1!==null || temp2!==null){
        let sum=carry;
        if(temp1){
            sum=sum+temp1.val;
            temp1=temp1.next;
            }
        if(temp2){ 
            sum=sum+temp2.val;
            temp2=temp2.next;
            }
        carry=Math.floor(sum/10); 
        curr.next = new ListNode(sum % 10);
        curr=curr.next;
        if (carry > 0) {
    curr.next = new ListNode(carry);
}
    }
    return dummynode.next;

};