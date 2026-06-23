function bubbleSort(arr){
    let swapped;
    do{
        swapped = false;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true;
            }
        }
    }while(swapped)
    return arr
}

let arr = [-6,8,20,-2,4]
console.log(bubbleSort(arr))

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numberToInsert = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>numberToInsert){
            arr[j+1] = arr[j]
            j=j-1
        }
        arr[j+1] = numberToInsert
    }
    return arr
}
let arr = [-6,8,20,-2,4]
console.log(insertionSort(arr))

function quickSort(arr){
    if(arr.length<2) return arr;
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
let arr = [-6,8,20,4,-2]
console.log(quickSort(arr))


function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let sortedArr = []
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return  [...sortedArr,...left,...right]
}

let arr = [-6,20,8,4,-2]
console.log(mergeSort(arr))

function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let minIndex = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>arr[minIndex]){
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

let arr = [-6,20,8,4,-2]
console.log(selectionSort(arr))
































