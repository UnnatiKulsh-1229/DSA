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

//Insert at end of linked list

class node{
    constructor(x){
        this.data=x;
        this.next=null;
    }
}
class Solution {
    insertAtEnd(head, x) {
        // code here
        let newnode=new node(x);
        if(head===null) return newnode;
        let last=head;
        while(last.next!==null){
            last=last.next;
            }
        last.next=newnode;
        return head; 
    }
}

//Insert at specific position
class Solution {
    insertPos(head, pos, val) {
        // code here
        if(pos<1) return head;
        if (pos === 1) {
        let newNode = new Node(val);
        newNode.next = head;
        return newNode;
    }
    let curr=head;
    for (let i = 1; i < pos - 1 && curr !== null; i++) {
        curr = curr.next;
    }
    if (curr === null) return head;
    let newNode = new Node(val);
    newNode.next = curr.next;
    curr.next = newNode;
    return head;
    }
}