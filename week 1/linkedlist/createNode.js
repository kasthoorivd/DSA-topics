const n1 = {
    data:100
}

const n2 = {
    data :200
}

n1.next = n2
console.log(n1)

//creating node class

class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next ;
    }
}

const n3 = new Node(100)
const n4 = new Node(200)

console.log(n3)
console.log(n4)