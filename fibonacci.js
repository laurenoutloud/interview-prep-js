/*
//Recursive Solution
function fib(n){
    if (n < 2){
        return n;
    }
    return fib(n-1) + fib(n-2);
}
console.log(fib(6)); */


//Recursive with memoization
class MemoFib {
    constructor() {
        this.memo = {};
    }

    fib(n){
        if (n < 2){
            return n;
        }
        if (n in this.memo){
            return this.memo[n];
        }
        this.memo[n] = this.fib(n-1) + this.fib(n-2);
        return this.memo[n];
    }
}
console.log(new MemoFib().fib(6));