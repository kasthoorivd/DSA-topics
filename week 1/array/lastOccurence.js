// Find the last occurrence of element in sorted array with duplicates

function lastOccurence(arr,target){
    let left = 0
    let right = arr.length-1
    let result = -1
    while(left<=right){

        let mid = Math.floor((left+right)/2)
        if(arr[mid] == target){
         result = mid
         left = mid+1
        }else if(target<arr[mid]){
            right = mid-1
        }else{
            left = mid+1
        }
    }
    return result
    }


let arr = [0,2,2,2,3,5]
console.log(lastOccurence(arr,2))