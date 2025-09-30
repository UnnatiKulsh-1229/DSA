//Method-1
function coll_pt(temp1,temp2,d){
    while(d){
        d--;
        temp2=temp2.next;
    }
    while(temp1!==temp2){
        temp1=temp1.next;
        temp2=temp2.next;
    }
    return temp1;
 }
var getIntersectionNode = function(headA, headB) {
    let len1=0;
    let len2=0;
    let temp1=headA;
    let temp2=headB;
    while(temp1!==null){
        len1+=1;
        temp1=temp1.next;
    }
    while(temp2!==null){
        len2+=1;
        temp2=temp2.next;
    }
    if(len1<len2){
        return coll_pt(headA,headB,len2-len1);
    }
    else{
        return coll_pt(headB,headA,len1-len2);
    }

};

//Method-2
var getIntersectionNode = function(headA, headB) {
    let temp1=headA;
    let temp2=headB;
    if(headA=== null || headB===null)  return null;
    while(temp1!==temp2){
        temp1=(temp1===null)?headB:temp1.next;
        temp2=(temp2===null)?headA:temp2.next;
        
    }
    return temp1;
};