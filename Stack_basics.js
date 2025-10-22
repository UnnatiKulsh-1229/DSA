//Stack using array
class myStack {
    constructor(n) {
        // Define Data Structures Stack
        this.arr=new Array(n);
        this.n=n;
        this.top=-1;
    }

    isEmpty() {
        // Check if stack is empty
        return this.top===-1;
        }

    isFull() {
        // Check if stack is full
        return this.top===this.n-1;
        }
    push(x) {
        // Push x at the top of the stack
        if(this.isFull()){
            return;
        }
        this.arr[++this.top]=x;
    }

    pop() {
        // Removes and element from the top of the stack
        if(this.isEmpty()){
            return -1;
        }
        return this.arr[this.top--];
    }

    peek() {
        // Returns the top element of the stack
        if(this.isEmpty()) return -1;
        return this.arr[this.top];
    }
}

//Stack using Queue

var MyStack = function() {
    this.q1=[];
};
MyStack.prototype.push = function(x) {
    this.q1.push(x);
    let n=this.q1.length;
    for(let i=0;i<n-1;i++){
        this.q1.push(this.q1[0]);
        this.q1.shift();
    }
};
MyStack.prototype.pop = function() {
    if (this.q1.length=== 0) return -1;
    return this.q1.shift();
};
MyStack.prototype.top = function() {
    if (this.q1.length === 0)
            return -1;
        return this.q1[0];
};

MyStack.prototype.empty = function() {
    if(this.q1.length===0) return true;
    return false;
};

//Stack using Linked list(GFG)
// Node class
/* class Node {
    constructor(new_data) {
        this.data = new_data;
        this.next = null;
    }
} */

class myStack {
    constructor() {
        this.top=null;
        this.len=0
        // Initialize your data members
    }

    isEmpty() {
        // check if the stack is empty
        return this.top===null;
    }

    push(x) {
        // Adds an element x at the top of the stack
        let temp=new Node(x);
        temp.next=this.top;
        this.top=temp;
        this.len++;
    }

    pop() {
        // Removes an element from the top of the stack
        if(this.top===null) return -1;
        let temp=this.top;
        this.top=this.top.next;
        let v=temp.data;
        temp=null;
        this.len--;
        return v;
    }

    peek() {
        // Returns the top element of the stack
        // If stack is empty, return -1
        if(this.top===null) return -1;
        return this.top.data;
    }

    size() {
        // Returns the current size of the stack
        return this.len;
        
    }
}