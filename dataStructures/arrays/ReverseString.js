//name gaurav
//varuag enam

function reverseString(str) {
  const answer = [];
  //check inputs
  if(!str || str.length < 2 || typeof str != 'string') {
    return "Incorrect input";
  }

  for(let i=str.length-1; i>=0; i--) {
    answer.push(str[i]);
  }
return answer.join('');
}



const reverse2 = str => str.split('').reverse().join('');

const reverse3 = str => [...str].reverse().join('');

console.log(reverseString("my name is gaurav"));

console.log(reverse2("my name is gaurav1"));

console.log(reverse3("my name is gaurav2"));