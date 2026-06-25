// class Queue{
//     constructor(){
//         this.items = []
//     }
//     enqueue(data){
//       this.items.push(data)
//     }
//     dequeue(){
//         return this.items.shift()
//     }
//     front(){
//         return this.items[0]
//     }
//     isEmpty(){
//         return this.items.length=== 0
//     }
//     size(){
//         return this.items.length
//     }
//     print(){
//         console.log(this.items)
//     }
// }
// const queue = new Queue()
// queue.enqueue(10)
// queue.print()

//queue using stack 
class Queue{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }
    isEmpty(){
        return this.stack1.length===0 && this.stack2.length===0
    }
    enqueue(data){
        this.stack1.push(data)
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
    peek(){
        if(this.isEmpty()){
            return null
        }
        if(this.stack2.length === 0){
            while(this.stack1.length >0 ){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length-1]
    }
    print(){
        const queue = [...this.stack1].reverse().concat(this.stack2)
        console.log(queue)
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
console.log(queue.peek())
console.log(queue.dequeue())
queue.print()




