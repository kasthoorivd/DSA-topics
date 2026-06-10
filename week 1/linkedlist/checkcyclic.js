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
        return this.size === 0
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
        if(this.isEmpty()){
            this.head = node
        }else{
            let curr = this.head 
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
            
        }
        this.size++
    }
    
    insert(data,index){
        let node = new Node(data)
        if(index<0 || index> this.size){
            return null
        }
        if(index == 0){
            node.next = this.head
            this.head = node
            
        }else{
            let curr = this.head 
            let prev;
            let count = 0
            while(count<index){
                prev = curr
                curr = curr.next 
                count++
            }
            prev.next = node
            node.next = curr.next 
        this.size++
        }
    }
    
    middle(){
        let slow = this.head 
        let fast = this.head 
        while(fast!=null && fast.next !=null){
            slow = slow.next 
            fast = fast.next.next
        }
        console.log(slow.data)
    }
    
    deleteMiddle(){
        let slow = this.head 
        let fast = this.head 
        let prev = null
        while(fast!=null && fast.next !=null){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = slow.next 
       
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
    
    delete(data){
        if(this.isEmpty()){
            return null
        }
        if(this.head.data == data){
            this.head = this.head.next 
        }
        else{
            let curr = this.head 
            while(curr&& curr.next){
                if(curr.next.data == data){
                    curr.next = curr.next.next
                }
                curr  = curr.next
            }
        }
        this.size--
    }
    palindrome(){
        
        if(this.isEmpty()){
            return null
        }
        let curr = this.head
        let arr = []
        while(curr){
            arr.push(curr)
            curr =curr.next
        }
        let left = 0
        let right = arr.length-1
        while(left < right){
           if(arr[left] != arr[right]){
               return false
           }
           left++
           right--
        }
        return true
    }
    
    checkCyclic(){
        let curr = this.head 
        if(this.head.next == this.head){
            return true
        }else{
            while(curr.next!=this.head){
                if(curr.next== this.head){
                    return true
                }
            }
            return false
        }
    }
    
    print(){
        let curr = this.head 
        while(curr){
            console.log(curr.data)
            curr = curr.next
        }
    }
}

const list = new linkedlist()
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.append(4)
list.append(5)
list.insert(10,4)
// list.deleteMiddle()
console.log(list.palindrome())
// list.delete(4)
console.log(list.checkCyclic())
list.reverse()
list.print()

// list.middle()


