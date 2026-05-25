function third(arr){
    let largest = -Infinity
    let second = -Infinity
    let third = -Infinity

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            third = second
            second = largest
            largest = arr[i]
        }else if(arr[i]<largest && arr[i]>second){
            third = second
            second = arr[i]
        }else if(arr[i]<second && arr[i]>third)
            third = arr[i]
    }
    return third
}

let arr = [5,3,7,8,2]
console.log(third(arr))