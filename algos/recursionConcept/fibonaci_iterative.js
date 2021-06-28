// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
    let total = 0;
    let temp1 = 0;
    let temp2 = 1;
    debugger
    if (n < 2) {
      return n;
    } 
 
    for(let i = 2; i <= n; i++) {
      total = temp1 + temp2; 
      temp1 = temp2;
      temp2 = total;
    }
    return total;
  }
console.log(fibonacciIterative(10));
  
