class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  get(index) {
    return this.data(index);
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }

}

const array = new CustomArray();
console.log(array);
array.push("gaurav");
array.push("gaurav1");
console.log(array);
console.log(array.delete(0));
console.log(array);
array.push("gaurav2");
console.log(array);
console.log(array.pop());

const array1 = new CustomArray();
array1.push("hi1");
array1.push("hi2");
array1.push("hi3");
array1.push("hi4");

console.log("array1", array1);

array1.delete(2);
console.log("after delete array1", array1);