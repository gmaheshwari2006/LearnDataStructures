let user = {
  age: 30,
  name: 'gaurav',
  student: false,
  calcMarks: function() {
    console.log("50% Marks");
  }
}

console.log(user.age); //O(1)
user.calcMarks(); // O(1)
console.log(user)
user.address = "new address" //O(1)
console.log(user.address)
delete user.student; //O(1)
console.log(user);