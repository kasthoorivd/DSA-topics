class Node{
    constructor(data,next =null){
        this.data = data;
        this.next = next;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }

    insertfirst(data){
        this.head = new Node(data, this.head)
    }

    getAtIndex(index){
        let current = this.head
        let count = 0
        while(current){
            if(count == index){
                console.log(current.data)
            }
            count++
            current = current.next
        }
        return null
    }

    printdata(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
         
        }
    }
}

const ll = new linkedList()
ll.insertfirst(100)
ll.insertfirst(200)
ll.insertfirst(300)
ll.getAtIndex(2)
ll.printdata()
