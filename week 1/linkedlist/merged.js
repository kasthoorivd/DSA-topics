class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    append(data){
       let node = new Node(data,this.head)
       let current = this.head
       if(!this.head){
        this.head = node
       }else{

           while(current.next){
            current = current.next
           }
           current.next = node
        }
        this.size++
    }

    print(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next 
        }
    }

}

function merged(l1,l2){
   if(l1==null) return l2;
   if(l2==null) return l1;

   let current = l1
   while(current.next != null){
    current = current.next
   }

   current.next = l2

   return l1
}
const l1 = new linkedList()
const l2 = new linkedList()

l1.append(1)
l1.append(2)
l1.append(3)

l2.append(4)
l2.append(5)
l2.append(6)

l1.print()
l2.print()

console.log(merged(l1.head ,l2.head))