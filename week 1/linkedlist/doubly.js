// // doubly linked list 
// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//         this.prev = null
//     }
// }

// class doublyLinkedlist{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
    
    
//     isEmpty(){
//     return this.size === 0
// }

    
//     prepend(data){
//         let node = new Node(data)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head.prev = node
//             this.head = node 
//         }
//     this.size++
//     }
    
//     append(data){
//         let node = new Node(data)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let curr = this.head
//             while(curr.next ){
//                 curr = curr.next
//             }
//         curr.next = node
//         node.prev = curr
//         }
//         this.size++
//     }
    
//     search(data){
//         let curr = this.head
//         let i = 0
//         while(curr){
//             if(curr.data == data){
//                 return i
//             }
//             i++
//             curr = curr.next
//         }
//         return null
//     }
    
//     removeduplicate(){
//         if(this.isEmpty()){
//             return null
//         }
        
//         let curr = this.head 
//         while(curr.next!=null && curr.next.data != null){
//             if(curr.data == curr.next.data){
//                 curr.next = curr.next.next
//             }
//             curr = curr.next
//         }
//         this.size--
//     }
    
//     indexDelete(index){
//          if(index == null || index<0 || index>this.size){
//              return null
//          }
//          if(index == 0){
//              this.head = this.head.next
//              if(this.head){
//                  this.head.prev = null
//              }
//              this.size--
//          }
         
//          let curr = this.head 
//          for(let i=0;i<index - 1;i++){
//              curr = curr.next
//          }
//          let remove = curr.next
//          curr.next = remove.next
//          if(remove.next){
//              remove.next.prev = curr
//          }
//          this.size--
//     }
//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.data)
//             curr = curr.next
//         }
//     }
// }

// const l1 = new doublyLinkedlist()

// l1.prepend(1)
// l1.prepend(2)
// l1.prepend(2)
// l1.prepend(3)
// l1.removeduplicate()
// l1.print()

// //doubly linkedlist 
// class Node{
//     constructor(data){
//         this.data = data 
//         this.next = null
//         this.prev = null
//     }
// }

class doublylinkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }
    
    isEmpty(){
        return this.size == 0
    }
    
    prepend(data){
        let node = new Node(data)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head 
            this.head.prev = node
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
           while(curr.next != null){
                curr = curr.next
           }
           curr.next = node
           node.prev  = curr
       }
       this.size++
   }
   
  insert(data,index){
      let node = new Node(data)
      
      if(index <0 || index> this.size){
          return null
      }
      
      if(index == 0){
          node.next = this.head 
          this.head.prev = node
          this.head = node
          this.size++
      }else{
          let curr = this.head 
          for(let i=0;i<index-1;i++){
              curr = curr.next
          }
          node.next = curr.next 
          curr.next.prev = node 
          node.prev = curr 
          curr.next = node
      }
      this.size++
  }
  
  indexDelete(index){
      if(index == null || index<0 || index> this.size){
          return null
      }
      if(index == 0){
          this.head = this.head.next 
          if(this.head ){
              this.head.prev = null
          }
      }
      
      let curr = this.head 
      for(let i=0;i<index-1;i++){
          curr = curr.next
      }
      
      let node = curr.next 
      curr.next = node.next 
      
      if(node.next){
          node.next.prev = curr
      }
          this.size--
  }
    print(){
        let  curr = this.head 
        while(curr){
            console.log(curr.data)
            curr = curr.next
        }
    }
}

const list = new doublylinkedlist()
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.append(4)
// list.insert()
list.indexDelete(1)
list.print()



