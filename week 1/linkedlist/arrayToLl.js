class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

function array(arr){
    if(arr.length==0) return null
    let head = new Node(arr[0])
    let curr = head
    for(let i=1;i<arr.length;i++){
        curr.next = new Node(arr[i])
        curr = curr.next
    }
    return head
}

let arr = [1,2,3,4,5]
console.log(array(arr))