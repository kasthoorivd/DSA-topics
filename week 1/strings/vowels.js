//remove vowels 
function  remove(a){
    return a.replace(/[aeiou]/g,'')
}

let a = 'hello'
console.log(remove(a))


function rem(a){
    let vowels = new Set(['a','e','i','o','u'])
    let res = ''
    for(let i=0;i<a.length;i++){
        if(!vowels.has(a[i])){
          res+=a[i]
        }
    }
    return res
}

console.log(rem(a))