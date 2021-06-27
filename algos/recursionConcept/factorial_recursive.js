function fib(n) {
    //1. base case
    if(n===1 || n === 2) {
        //3. 1st return
        return n;
    }
    //2. Identify the recursive case
    return n * fib(n-1); 
    //3. 2nd return
}
console.log(fib(2));