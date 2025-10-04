var copyRandomList = function(head) {
    if (head === null) return null;
    let res=new Map();
    let temp=head;
    while(temp!==null)
    {
        res.set(temp,new Node(temp.val));
        temp=temp.next;
    }
    temp=head;
    while(temp!==null){
        const newNode = res.get(temp);
        newNode.next = res.get(temp.next) || null;
        newNode.random = res.get(temp.random) || null;
        temp=temp.next;
    }
    return res.get(head)||null;
};