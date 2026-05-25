function moveZeros(arr){
    let nonZero = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] != 0){
            let temp = arr[i]
            arr[i] = arr[nonZero]
            arr[nonZero] = temp
            nonZero++
        }
    }
    return arr
}

let arr = [3,0,9]
console.log(moveZeros(arr))