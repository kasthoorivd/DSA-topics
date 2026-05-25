function minMax(arr){
    let min = arr[0]
    let max = arr[0]

    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
        }

        if(arr[i]>max){
            max = arr[i]
        }
    }

    return {
        minimum : min,
        maximum : max
    }
}

let arr = [4,1,7,6,8]
console.log(minMax(arr))