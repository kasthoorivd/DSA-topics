function removeMin(arr){
    let min = arr[0]
    let index = 0

    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
            index = i
        }
    }
    arr.splice(index,1)
    return arr
}

let arr = [2,1,3,5,3]

console.log(removeMin(arr))