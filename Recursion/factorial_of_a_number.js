

function Factorial(n){
    let result = 1;//2
      //    3<=3
    for(let i = 2; i<=n;i++){
      result = result * i //6
    }
    
    return result; //2
}

 console.log(Factorial(5))

// Fibonacci Sequence
let memo = {}; 

function FibonacciOptimized(n) {
    if (n in memo) return memo[n];

    if (n === 1) return 0;
    if (n === 2) return 1;
 
   
    memo[n] = FibonacciOptimized(n - 1) + FibonacciOptimized(n - 2);
    console.log("memo",n , memo[n])
    return memo[n];
}


console.log(FibonacciOptimized(50));