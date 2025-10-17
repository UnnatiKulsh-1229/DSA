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