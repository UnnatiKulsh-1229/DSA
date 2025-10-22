// Queue using arrays
class myQueue {
    constructor(n) {
        // Define Data Structures
        this.arr=new Array(n);
        this.n=n;
        this.size=0;
        
    }

    isEmpty() {
        // Check if queue is empty
        return this.size===0;
    }

    isFull() {
        // Check if full
        return this.size===this.n;
    }

    enqueue(x) {
        // Enqueue
        if(this.isFull()) return-1;
        this.arr[this.size++]=x;
    }

    dequeue() {
        // Dequeue
        if(this.isEmpty()) return -1;
        const front=this.arr[0];
        for(let i=1;i<this.size;i++){
            this.arr[i-1]=this.arr[i];
        }
            this.size--;
            return front;
        }

    getFront() {
        // Get front element
        if (this.isEmpty()) return-1;
        return this.arr[0];
    }
    getRear() {
        // Get rear element
        if(this.isEmpty()) return -1;
        return this.arr[this.size-1];
    }
}

//Queue using Stack(LC_PROB_232)
var MyQueue = function() {
    this.s=[];    
};
/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.s.length===0) return -1;
    let x=this.s.pop();
    if(this.s.length===0) return x;
    let item = this.pop();
    this.s.push(x); 
    return item;
};
/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
        if(this.s.length===0) return -1;
        let x = this.s.pop();

        if (this.s.length === 0) {
            this.s.push(x);
            return x;
        }
           // recursive call
        let item = this.peek();
        this.s.push(x);
        return item;
    }

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s.length===0;
};
/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

//Queue using linked list
// Node class
class Node {
    constructor(new_data) {
        this.data = new_data;
        this.next = null;
    }
}

class myQueue {
    constructor() {
        // Initialize your data members
        this.front=null;
        this.rear=null;
        this.len=0;
    }

    isEmpty() {
        // Return true if queue is empty, else false
        return (this.front===null &&this.rear===null);
    }

    enqueue(x) {
        // Add element x to rear of queue
        let newnode=new Node(x)
        if(this.isEmpty()){
            this.rear=this.front=newnode;
        }
        else{
            this.rear.next=newnode;
            this.rear=newnode;
        }
        this.len++;
    }

    dequeue() {
        // Remove front element
        if(this.isEmpty()) return -1;
        let val=this.front.data;
        this.front=this.front.next;
        if(this.front===null){
            this.rear=null;
        }
        this.len--;
        return val;
    }
    getFront() {
        if(this.isEmpty()) return -1;
        return this.front.data;
        // Return front element; return -1 if empty
    }

    size() {
        // Return current size of the queue
        return this.len;
    }
}
