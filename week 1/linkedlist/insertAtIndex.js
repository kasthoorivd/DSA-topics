class Node {
    constructor(data,next= null){
        this.data = data;
        this.next = next;
    }
}

class linkedList{
   constructor(){
    this.head = null;
    this.size = 0;
   }
   
   inserFirst(data){
    this.head = new Node(data,this.head)
    this.size++
   }
   
   insertAt(data,index){
    if(index>0&&index>this.size){
        return
    }
    if(index==0){
        this.head = new Node(data,this.head)
        this.size++
        return
    }
        const node = new Node(data)
        let current,previous;
        current = this.head
        let count = 0
        while(count<index){
            previous = current
            current = current.next
            count++
        }
        node.next = current;
        previous.next = node
        this.size++
    
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
ll.inserFirst(200)
ll.inserFirst(100)
ll.inserFirst(300)
ll.insertAt(500,2)
ll.printdata()