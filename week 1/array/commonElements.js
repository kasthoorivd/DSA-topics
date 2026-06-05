function commonElements(arr1,arr2){
    let result = []
    let set = new Set(arr1)
    for(let i=0;i<arr2.length;i++){
        if(set.has(arr2[i])){
            result.push(arr2[i])
        }
    }
    return result 
}

let arr1 = [1,2,3,4]
let arr2 = [3,4,5,6]

console.log(commonElements(arr1,arr2))