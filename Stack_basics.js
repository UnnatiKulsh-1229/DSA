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