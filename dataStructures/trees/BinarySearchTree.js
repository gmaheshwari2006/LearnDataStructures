class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      const node = new Node(value);
      if(this.root === null) {
        this.root = node;
        return this;
      } else {
       this.findNextNode(value, this.root, node);
      }
      return this;
    }

    findNextNode(value, node, n) {
      if(value > node.value) {
        if(node.right === null) {
          node.right = n;          
          return node;
        } else {
          this.findNextNode(value, node.right, n);
        }
      }  else {
        if(node.left === null) {
          node.left = n;
          return node;
        } else {
          this.findNextNode(value, node.left, n);
        }
      } 
    } 

    insert1(value) {
      const node = new Node(value);
      if(this.root === null) {
        this.root = node;       
      } else {
        let currentNode = this.root;
        while(true) {
          if(value > currentNode.value) {
            if(!currentNode.right) {
              currentNode.right = node;
              return this;
            } else {
              currentNode = currentNode.right;
            }
          } else {
            if(!currentNode.left) {
              currentNode.left = node;
              return this;
            } else {
              currentNode = currentNode.left;
            }
          }
        }
      }
    }
    lookup(value){
      if(!this.root) {
        return false;
      } 
      let currentNode = this.root;
      while(currentNode) {
        if(value > currentNode.value) {
          currentNode = currentNode.right;
        } else if(value < currentNode.value){
          currentNode = currentNode.left;
        } else if(value === currentNode.value) {
          return true;
        }
      }
      return false;

    }
    // remove
  }
  
  const tree = new BinarySearchTree();
  /*console.log(tree.insert(9));
  console.log(tree.insert(15))
  console.log(tree.insert(6))
  console.log(tree.insert(10)) 
  console.log(tree.insert(12))
  console.log(tree.insert(8)) */
 // tree.insert(1) */
 tree.insert1(9);
 tree.insert(15);
 tree.insert(6);
 tree.insert(10);
 tree.insert(12);
 tree.insert(8);
 // console.log(JSON.stringify(traverse(tree.root)));
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  console.log(tree.lookup(10));