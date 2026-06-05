function findFrequency(arr){
    let freq = {}
    for(let a of arr){
        freq[a] = (freq[a] || 0) + 1
    }
    return freq
}

let arr = [2,4,2,3,2,3]
console.log(findFrequency(arr))