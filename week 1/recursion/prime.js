let arr = [1,2,3,4,5]

function prime(n){
   if(n<2) return false
   for(let i=2;i<=Math.sqrt(n);i++){
    if(n%i==0){
        return false
    }
   }
   return true
}

let res = arr.filter(prime)
console.log(res)