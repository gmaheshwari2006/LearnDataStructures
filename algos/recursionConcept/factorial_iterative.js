
function fib(n) {
    let total = 1;
    if(n === 2 || n === 1) {
        return n;
    }
   for (let i = n; i > 1; i--) {       
        total = total * i;
   }
   return total;
}


console.log(fib(5));