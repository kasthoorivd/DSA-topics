function fib(n){
    if(n==0) return 0
    if(n==1) return 1

    return fib(n-1) + fib(n-2)
}

// console.log(fib(6))

function print(n){
   let res = []
   for(let i=0;i<=n;i++){
    res.push(fib(i))
   }
   return res
}

console.log(print(6))