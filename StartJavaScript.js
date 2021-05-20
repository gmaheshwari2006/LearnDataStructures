
function compare() {


  console.log([]===[])

  console.log([1]===[1])
  var object1= {value: 10};
  var object2 = object1;
  var object3 = {value: 10}

  console.log(object1 === object2);
  console.log(object1 === object3)
  console.log(object1.value === object3.value)

  console.log(this);

  //console.log(this === Window)
  //Window.alert("hello");
}

compare();


const object4 =   {
  a: function() {
    console.log('a', this);
  }

}

object4.a();
