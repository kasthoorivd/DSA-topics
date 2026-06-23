function replace(str,replace='*'){
    let freq = {}
    for(let s of str){
        freq[s] = (freq[s] || 0) + 1
    }
    console.log(freq)
    
    let res = ''
    for(let ch of str){
        if(freq[ch]==1){
            res+=replace
        }else{
            res+=ch
        }
    }
    return res
}

let str = 'hello'
console.log(replace(str))