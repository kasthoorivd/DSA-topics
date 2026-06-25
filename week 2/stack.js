function insertAtBottom(stack,item){
    if(stack.length===0) {
        stack.push(item)
        return
    }
    let top = stack.pop()
    insertAtBottom(stack,item)
    stack.push(top)
}

function reverseStack(stack){
    if(stack.length===0){
        return 
    }
    
    let top = stack.pop()
    
    reverseStack(stack)
    insertAtBottom(stack,top)
}

let stack = [1,2,3,4]
reverseStack(stack)
console.log(stack)


//implementation of stack using queue
class Queue{
    constructor(){
        this.items  = []
    }
    enqueue(data){
        this.items.push(data)
    }
    dequeue(){
        return  this.items.shift()
    }
    front(){
        return this.items[0]
    }
    isEmpty(){
        return this.items.length===0
    }
    size(){
        return this.items.length
    }
}

class Stack {
    constructor(){
        this.queue = new Queue()
    }
    push(data){
        this.queue.enqueue(data)
        for(let i=0;i<this.queue.size()-1;i++){
            this.queue.enqueue(this.queue.dequeue())
        }
    }
    pop(){
        return this.queue.dequeue()
    }
    peek(){
        return this.queue.front()
    }
    isEmpty(){
        return this.queue.isEmpty()
    }
    print(){
        console.log(this.queue.items)
    }
}
const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
console.log(stack.pop())
console.log(stack.peek())




