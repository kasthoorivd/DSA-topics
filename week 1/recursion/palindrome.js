function palindrome(a){
    if(a.length <=1){
        return true
    }
    if(a[0] != a[a.length-1]){
        return false
    }
    
    return palindrome(a.slice(1,a.length-1))
}
console.log(palindrome('madam'))
console.log(palindrome('hello'))

function first(str){
    let freq ={}
    for(let s of str){
        freq[s] = (freq[s] || 0) + 1
    }
    console.log(freq)
    
   for(let i= str.length-1;i>=0;i--){
      if(freq[str[i]]==1){
          return str[i]
      }
   }
}


console.log(first('hello'))