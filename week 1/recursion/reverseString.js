function reverseString(str){
   if(str.length==0){
    return ''
   }

   return reverseString(str.slice(1)) + str[0]
}

let str = 'hello'
console.log(reverseString(str)) 