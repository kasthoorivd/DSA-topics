class Node{
    constructor(data){
        this.data = data 
        this.next = null
    }
}
class cycliclinkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    append(data){
        let node = new Node(data)
        if(this.isEmpty()){
            this.head = node
            node.next = this.head 
        }else{
            let curr = this.head
            while(curr.next !=this.head){
                curr = curr.next
            }
            curr.next = node
            node.next = this.head
        }
        this.size++
    }
    prepend(data){
        let node = new Node(data)
        if(this.isEmpty()){
            this.head = node
            node.next = this.head
            
        }else{
            let curr = this.head
            while(curr.next != this.head){
                curr = curr.next 
            }
            node.next = this.head
            this.head = node

            curr.next = this.head
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            return null
        }
        let curr = this.head 
        do{
            console.log(curr.data)
            curr = curr.next 
        }while(curr != this.head)
    }
}

const list = new cycliclinkedlist()
list.append(4)
list.append(5)
list.prepend(3)
list.print()