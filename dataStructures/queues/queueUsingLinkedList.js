class Node {
    constructor(value) {   
        this.value = value;
        this.next = null;    
    }
  }
//top behave as first and tail behave as last;
class QueueUsingLinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.first = node;
            this.last = node;            
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
        return this;
    }

    dequeue(){
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const queue = new QueueUsingLinkedList();
console.log(queue.enqueue(10));
console.log(queue.enqueue(20));
console.log(queue.enqueue(30));
console.log(queue.peek())
console.log(queue.dequeue());