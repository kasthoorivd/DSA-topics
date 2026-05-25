function secondLargest(arr){
   let largest = -Infinity
   let second = -Infinity

   for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
       second = largest
       largest = arr[i]
    }else if(arr[i]<largest && arr[i]>second){
        second = arr[i]
    }
   }
   return second
}
let arr = [2,-1,4,3,9]
console.log(secondLargest(arr))