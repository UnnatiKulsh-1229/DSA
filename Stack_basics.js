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