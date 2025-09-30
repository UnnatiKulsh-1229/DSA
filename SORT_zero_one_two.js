class Solution {
    segregate(head) {
        // code here
        if(head===null|| head.next===null) return head;
        //dummy nodes
        let zero=new Node(0);
        let one=new Node(0);
        let two=new Node(0);
        let zeros=zero;
        let ones=one;
        let twos=two;
        let temp=head;
        while(temp!==null){
            if(temp.data===0){
                zeros.next=temp;
                zeros=zeros.next;
            }
            else if(temp.data===1){
                ones.next=temp;
                ones=ones.next;
            }
            else{
                twos.next=temp;
                twos=twos.next;
            }
            temp=temp.next;
        }
        zeros.next=one.next?one.next:two.next;
        ones.next=two.next;
        twos.next=null;
        return zero.next;
    }
}