function combination(arr,target){
    let seen = {}
    for(let i=0;i<arr.length;i++){
        let a = target - arr[i]
        if(seen[a]){
            return [a,arr[i]]
        }
        seen[arr[i]] = true
    }
    return 'no combination found'
}

let arr = [2,7,11,15]
console.log(combination(arr,9))