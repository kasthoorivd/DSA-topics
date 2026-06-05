function evenAvg(arr){
    let sum = 0
    let count = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 ==0){
            sum+=arr[i]
            count++
        }
    }
    return count==0?0:sum/count
}

let arr = [1,2,3,4,5]
console.log(evenAvg(arr))