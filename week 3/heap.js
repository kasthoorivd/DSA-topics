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


class MinHeap{
    constructor(){
        this.heap = []
    }
    parent(index){
        return Math.floor((index-1)/2)
    }
    left(index){
        return 2 * index +1
    }
    right(index){
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
        let index = this.heap.length -1
        while(index>0){
            let parent  = this.parent(index)
            if(this.heap[parent]>this.heap[index]){
                this.swap(parent,index)
                index = parent
            }else{
                break
            }
        }
    }
    
    extract(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop()
        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return min
    }
    
    heapifyDown(index){
        let smallest = index
        let left = this.left(index)
        let right = this.right(index)
        if(left < this.heap.length && this.heap[smallest]>this.heap[left]){
            smallest = left
        }
        if(right < this.heap.length && this.heap[smallest]> this.heap[right]){
            smallest = right
        }
        if(smallest !== index){
            this.swap(smallest,index)
            this.heapifyDown(smallest)
        }
    }
    print(){
        console.log(this.heap)
    }
}
const heap = new MinHeap()
heap.insert(100)
heap.insert(30)
heap.insert(50)
heap.insert(38)
heap.insert(67)
heap.print()
console.log(heap.extract())
heap.print()



