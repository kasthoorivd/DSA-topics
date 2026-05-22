//what is recursion?
//recursion means calling a function again and again until a base condition stops it

//what is base condition?
//it is a condition where recursion stop making new calls 

//what happens if there is no base condition?
//.stack will get filled again and again
//.every function call takes memory
//.then memory of computer will exceed the limit this is going to give stackover flow error

//print numbers from 1 to 5
function printNumbers(n){
    if(n==0) {
        return 
    }

    printNumbers(n-1)
    console.log(n)
}

printNumbers(5)

//print numbers from 5 to 1 (reverse)

function print(n){
   if(n==5){
    console.log(n)
    return
   }
   print(n+1)
   console.log(n)
}
print(1)