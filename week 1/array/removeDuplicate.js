function removeDuplicate(arr){
  let hash = {}
  let result = []
  for(let i=0;i<arr.length;i++){
    if(!hash[arr[i]]){
        hash[arr[i]] = true
        result.push(arr[i])
    }
  }
  return result
}

let arr =[2,1,2,3,2,4,3]
console.log(removeDuplicate(arr))