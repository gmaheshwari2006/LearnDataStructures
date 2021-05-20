class customLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.lenght = 1;
  }

  append(value) {
    const node ={
      value: value,
      next: null
    }
    this.tail.next = node;
    this.tail = node;    
    this.lenght++;
  }

  prepend(value) {
    const node ={
      value: value,
      next: this.head
    }
    this.head = node;        
    this.lenght++;
  }
}

const myLinkedList = new customLinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
console.log(myLinkedList);

//10 5 16
