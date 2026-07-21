class MaxHeap{
    constructor(){
        this.heap = []
    }
    parentIndex(index){
        return Math.floor((index - 1)/2)
    }
    leftChildIndex(index){
        return 2 * index + 1
    }
    rightChildIndex(index){
        return 2 * index + 2
    }
    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp(){
        let index = this.heap.length - 1
        while(index){
            let parent = this.parentIndex(index)
            if(this.heap[parent]<this.heap[index]){
                this.swap(parent,index)
                index = parent
            }else{
                break
            }
        }
    }
    extract(){
        if(this.heap.length===0) return null
        if(this.heap.length === 1) return this.heap.pop()
        let max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return max
    }
    
    heapifyDown(index){
        let largest = index
        let left = this.leftChildIndex(index)
        let right = this.rightChildIndex(index)
        if(left < this.heap.length && this.heap[largest]<this.heap[left]) {
            largest = left
        }
        if(right < this.heap.length && this.heap[largest]< this.heap[right]){
            largest = right
        } 
        if(largest !== index){
            this.swap(largest,index)
            this.heapifyDown(largest)
        }
    }
    print(){
        console.log(this.heap)
    }
}

const heap = new MaxHeap()
heap.insert(30)
heap.insert(70)
heap.insert(20)
heap.insert(100)
heap.insert(90)
heap.insert(80)
heap.print()
heap.extract()
heap.print()


