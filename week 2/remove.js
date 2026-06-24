//remove mid element in stack

function removeMid(stack,count,size){
    if(count === Math.floor(size/2)){
        stack.pop()
        return
    }
    let top = stack.pop()
    removeMid(stack,count+1,size)
    stack.push(top)
}

let stack = [1,2,3,4,5]
removeMid(stack,0,stack.length)
console.log(stack)