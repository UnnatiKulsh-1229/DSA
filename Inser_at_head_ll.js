class  node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class Solution {
    insertAtHead(head, X) {
        let newnode=new node(X);
        newnode.next=head;
        head=newnode;
        return head;

    }
}