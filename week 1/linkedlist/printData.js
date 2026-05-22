class Node{
    constructor(data,next= null){
        this.data = data;
        this.next = next
    }
}

class linkedList{
    constructor(){
       this.head = null;
       this.size = 0
    }
  
   insertFirst(data){
     this.head = new Node(data,this.head)
   }
   printdata(){
    let current = this.head
    while(current){
        console.log(current.data)
        current= current.next
    }
   }

}

const ll = new linkedList()
ll.insertFirst(100)
ll.insertFirst(200)
ll.printdata()
