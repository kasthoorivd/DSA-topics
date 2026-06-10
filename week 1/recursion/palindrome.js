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