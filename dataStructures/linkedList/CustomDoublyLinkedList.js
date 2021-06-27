class Node {
  constructor(value) {   
      this.value = value;
      this.next = null;  
      this.prev = null;  
  }
}

class customDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    /*const node = {
      value: value,
      next: null,
      prev: null
    }*/
    //console.log('append', node.value);
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);
    /*const node = {
      value: value,
      next: null,
      prev: null
    }*/
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
  }
 
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode != null) {
      //console.log('currentNode', currentNode);
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log('linked list is: ', array);
  }
  
  insert(index, value) {
    console.log('length: ', this.length);
    const node = new Node(value);
    let counter = 0;
    
    if(index === 0) {
      this.prepend(value);
    return;
    }
    if(index >= this.length) {
      this.append(value);
      return;
    }
    let currentNode = this.head;
     console.log('In insert currentNode: ', currentNode);
    while(counter != index) {
      if(counter === index-1) {
        let nextNode = currentNode.next; 
        currentNode.next = node;
        node.next = nextNode;
        node.prev = currentNode;
        nextNode.prev = node;
        this.length++;
        break;
      } else {       
        currentNode = currentNode.next;
      }
      counter++;
    }
  }

  remove(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter != index) {
    if(counter === index-1) {
      let preNode = currentNode;
      let nextNode = currentNode.next.next;
      preNode.next = nextNode;
      nextNode.prev = preNode;
       this.length--;
      return;
    } else {
        currentNode = currentNode.next;
    }
    counter++;
    }
  }


}

const myLinkedList = new customDoublyLinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.printList();
myLinkedList.insert(2, 99);
myLinkedList.insert(0, 11);
myLinkedList.insert(40, 100);
myLinkedList.printList();
//console.log(myLinkedList);
myLinkedList.remove(3);
myLinkedList.printList();
//1 10 5 16 
