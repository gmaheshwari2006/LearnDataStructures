class Node {
  constructor(value) {   
      this.value = value;
      this.next = null;    
  }
}

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
    const node = new Node(value);
    /*const node = {
      value: value,
      next: null
    }*/
    this.tail.next = node;
    this.tail = node;
    this.lenght++;
  }

  prepend(value) {
    const node = new Node(value);
    /*const node = {
      value: value,
      next: null
    }*/
    node.next = this.head;
    this.head = node;
    this.lenght++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode != null) {
      console.log('currentNode', currentNode);
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log('linked list is: ', array);
  }
  insert(index, value) {
    
  }
}

const myLinkedList = new customLinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
//myLinkedList.insert(2, 99);
myLinkedList.printList();
//console.log(myLinkedList);

//1 10 5 16 
