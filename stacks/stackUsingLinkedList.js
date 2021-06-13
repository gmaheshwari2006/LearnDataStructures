class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//head of linked list behave and works fine as top and tail as bottom
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const n = new Node(value);
    if (this.length === 0) {
      this.top = n;
      this.bottom = n;
    } else {
      const tempHead = this.top;
      this.top = n;
      this.top.next = tempHead;
    }
    this.length++;
    return this;
  }

 /* push1(value) {
    const node = new Node(value);
    console.log("value: ", node.value);
    console.log("length: ", this.length);
    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      this.top.next = node;
      this.top = node;
    }
    this.length++;
    return this;
  }

  pop1() {} */
  pop() {
    console.log("length: ", this.length);
    if (!this.top) {
      return null;
    }
    if (this.bottom === this.top) {
      this.bottom = null;
    }
    //const t = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const s = new Stack();
console.log(s.push(10));
console.log(s.push(20));
console.log(s.push(30));
console.log(s.peek());
console.log(s.pop())
