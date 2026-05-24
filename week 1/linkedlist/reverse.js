class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class linkedlist {
    constructor(){
        this.head = null 
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size 
    }

    prepend(data){
        let node = new Node(data)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
        
    }

    reverse(){
        let curr  = this.head
        let prev = null
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next 
        }

        this.head = prev
    }

    printdata(){
        let current = this.head
        while(current){
            console.log(current.data)
            current=current.next
        }
    }
}

const ll = new linkedlist()
ll.prepend(10)
ll.prepend(20)
ll.prepend(30)
ll.reverse()
ll.printdata()
