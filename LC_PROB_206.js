class node{
    constructor(val){
        this.val=newval;
        this.next=null;
    }
 }
var reverseList = function(head) {
    let curr=head;
    let prev=null;
    let next;
    while(curr!= null){
        next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    return prev;
        let result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join(" -> "));
};