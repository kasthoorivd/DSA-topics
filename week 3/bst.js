class Node{
    constructor(data){
        this.data = data 
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(data){
        let node = new Node(data)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.data < root.data){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    search(root,data){
        if(!root){
            return false
        }else{
            if(root.data === data){
                return true
            }else if(data<root.data){
               return this.search(root.left,data)
            }else{
               return this.search(root.right,data)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.data)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.data)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.data)
        }
    }
   levelOrder(root){
       let queue = []
       queue.push(this.root)
       while(queue.length){
           let curr = queue.shift()
           console.log(curr.data)
           if(curr.left){
               queue.push(curr.left)
           }
           if(curr.right){
               queue.push(curr.right)
           }
       }
   }
   
   min(root){
       if(!root.left){
           return root.data
       }else{
           return this.min(root.left)
       }
   }
   
   max(root){
       if(!root.right){
           return root.data
       }else{
           return this.max(root.right)
       }
   }
   
   
   delete(data){
      this.root =  this.deleteNode(this.root,data)
   }
   
   deleteNode(root,data){
       if(root === null){
           return root
       }
       if(data < root.data){
           root.left = this.deleteNode(root.left,data)
       }else if(data > root.data){
           root.right = this.deleteNode(root.right,data)
       }else {
           if(!root.left && !root.right){
               return null
           }
           if(!root.left){
               return root.right
           }else if(!root.right){
               return root.left
           }    
           root.data = this.min(root.right)
           root.right = this.deleteNode(root.right,root.data)
       }
       return root
   }
   secondLargest(root){
    if(!root || (!root.left && !root.right)){
        return null
    }
    let curr = root
    while(curr){
        if(curr.right && !curr.right.left && !curr.right.right){
            return curr.data
        }
        if(!curr.right){
            return this.max(curr.left)
        }
        curr = curr.right
    }
   }

   closestValue(root,target){
    let closest = root.data 
    while(root){
        if(Math.abs(target - root.data) < Math.abs(target - closest)){
            closest = root.data
        }
        if(target < root.data){
            root = root.left
        }else if(target > root.data){
            root = root.right
        }else{
            return root.data
        }
    }
      return closest
   }


   printLeafNode(root){
     if(root === null){
        return
     }
     if(!root.left && !root.right){
        console.log(root.data)
     }
     this.printLeafNode(root.left)
     this.printLeafNode(root.right)
   }
  

    sumLeafNode(root){
        if(root === null){
            return 0
        }
        if(!root.left && !root.right){
            return root.data
        }
        return this.sumLeafNode(root.left) + this.sumLeafNode(root.right)
    }
}


const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log(bst.isEmpty())
console.log(bst.search(bst.root,12))
bst.levelOrder(bst.root)
bst.delete(5)
console.log('next')
bst.levelOrder(bst.root)
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))
console.log(bst.secondLargest(bst.root))
console.log('closest value => ' + bst.closestValue(bst.root,12))
bst.printLeafNode(bst.root)
console.log(bst.sumLeafNode(bst.root))




