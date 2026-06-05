class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }
    
    isEmpty(){
        return this.size == 0
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
    
    append(data){
        let node = new Node(data)
        let curr
        curr = this.head
        if(!this.head){
            this.head = node
        }else{
            
        while(curr.next){
          
            curr = curr.next
        }
        curr.next = node
        }
        this.size++
    }
    
     insert(data,index){
         if(index <0 || index> this.size){
             return
         }
         if(index == 0){
             this.head = new Node(data,this.head)
             this.size++
         }
         let node = new Node(data)
         let curr,prev,count=0
         curr = this.head
         while(count<index){
             prev = curr
             curr= curr.next
             count++
         }
         node.next = curr
         prev.next = node
         this.size++
     }
     
     middle(){
         let slow = this.head
         let fast = this.head
         while(fast !==null && fast.next!=null){
             slow = slow.next
             fast= fast.next.next
         }
        console.log(slow.data)
     }
     
     deleteMiddle(){
         let slow = this.head
         let fast = this.head 
         let prev = null
         while(fast != null && fast.next != null){
             prev = slow
             slow  = slow.next
             fast =  fast.next.next
         }
         
         prev.next = slow.next
     }
     deleteNode(data){
         if(this.isEmpty()){
             return null
         }
         
         if(this.head.data == data){
             this.head = this.head.next
             this.size--
         }else{
             let curr = this.head 
             while(curr.next != null && curr.next.data !=data){
                 curr = curr.next
             }
             if(curr.next){
                 curr.next = curr.next.next
                 this.size--
             }
         }
         
     }
     
     isPalindrome(){
         if(this.isEmpty()){
             return null
         }
         
         let arr = []
         let curr = this.head
         while(curr){
             arr.push(curr.data)
             curr = curr.next
         }
         
         let left = 0
         let right = arr.length-1
         while(left<right){
             if(arr[left] != arr[right]){
                 return false
             }
             left++
             right--
         }
         return true
     }
     reverse(){
        
         let curr = this.head
         let prev = null
         while(curr){
             let next = curr.next
             curr.next = prev
             prev = curr
             curr = next
         }
         this.head = prev
     }
    print(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

function merge(l1,l2){
    if(l1==null) return l2;
    if(l2==null) return l1
    
    let curr = l1
    while(curr.next != null){
        curr=curr.next
    }
    curr.next = l2
    
    return l1
}



const l1 = new linkedlist()
l1.append(1)
l1.append(2)
l1.append(3)
l1.append(2)
l1.append(1)
// l1.deleteNode(4)
console.log(l1.isPalindrome())
// l1.reverse()
// l1.middle()
// l1.deleteMiddle()
// l1.insert(7,2)
l1.print()










//delete , get middle , delete middle 