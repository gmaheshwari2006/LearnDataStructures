
function fib(n) {
    if(n===1) {
        return 1;
    }
    return n * fib(n-1);
}

console.log(fib(5));