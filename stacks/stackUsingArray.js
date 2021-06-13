class StackUsingArray{
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length-1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        this.array.pop();
        return this;
    }
}
const stack = new StackUsingArray();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.pop());
