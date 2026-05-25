function kthLargest(arr,k){
  arr.sort((a,b)=>b-a)
  return arr[k-1]
}

let arr = [7,2,9,4,1,8]
console.log(kthLargest(arr,3))