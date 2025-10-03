var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;
    let len = 1;
    let temp = head;
    while (temp.next !== null) {
        len++;
        temp = temp.next;
    }
    k = k % len;
    if (k === 0) return head;
    temp.next = head;
    let newLastNode = findn(head, len - k);
    let newHead = newLastNode.next;
    newLastNode.next = null;

    return newHead;
};
function findn(head, n) {
    let curr = head;
    for (let i = 1; i < n; i++) {
        curr = curr.next;
    }
    return curr;
}
