//give a positive integer 'n' , determine if the number is a power of 2 or not 
//An integer is a power of 2 if there exists an integer 'x' such that 'n' === 2x

//isPowerOfTwo(1) = true(2)
//isPowerOfFour(4) = true (2^2)

//pseudocode => what we are going to do in here is ,divide the number repeatedly with 2 and with the answer is 0 return true else false

function isPowerOfTwo(n){
    if(n<1) return false;
    while(n>1){
      if(n%2!==0){
        return false
      }
      n=n/2
    }
    return true
}

console.log(isPowerOfTwo(10))