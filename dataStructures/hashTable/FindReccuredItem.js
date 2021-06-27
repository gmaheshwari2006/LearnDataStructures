//O(n) but there is 
function findReccuredItem1(arr) {
  console.log(arr)
let counter= 0;
let map = {};
  for (let i = 0; i < arr.length; i++) {
    console.log("for i : ", i );
    console.log("key at i: ", map[arr[i]]);
      if(map[arr[i]]) {
         console.log('found the answer', arr[i]);
          return;
      } else {
        map[arr[i]] = i;
      }
  }
  console.log("nothing found");
 return;
}

findReccuredItem1([2, 7, 1, 3, 2, 4, 5, 2, 0, 5]);

//brute force method O(n^2)
function findReccuredItem(arr) {
  console.log(arr)
let counter= 0;

  for (let i = 0; i < arr.length; i++) {
      for (let j = i+1; j < arr.length; j++) {
        counter++;
        console.log('counter', counter);
        if (arr[i] === arr[j]) {
          console.log('found the answer', arr[i]);
          return;
        } 
      }

  }
console.log("nothing found");
}

//findReccuredItem([7, 1, 3, 2, 4, 5, 2, 0, 5]);