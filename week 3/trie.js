class TrieNode{
    constructor(){
        this.children = {}
        this.isEndword = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let curr = this.root
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char] = new TrieNode()
            }
            curr = curr.children[char]
        }
        curr.isEndword = true
    }
    search(word){
        let curr = this.root
        for(let char of word){
            if(!curr.children[char]){
                return false
            }
            curr = curr.children[char]
        }
        return curr.isEndword
    }
    autoComplete(prefix){
        let curr = this.root
        for(let char of prefix){
            if(!curr.children[char]){
                return []
            }
            curr = curr.children[char]
        }
        let result = []
        this.dfs(curr,prefix,result)
        return result
    }
    
    dfs(node,word,result){
        if(node.isEndword){
            result.push(word)
        }
        for(let char in node.children){
            this.dfs(node.children[char],word+char,result)
        }
    }
    print(){
        let result=[]
        this.dfs(this.root,'',result)
        console.log(result)
    }
}


const trie = new Trie()
trie.insert('cat')
trie.insert('car')
trie.insert('care')
trie.insert('dog')
console.log(trie.search('cars'))
trie.print()
console.log(trie.autoComplete('ca'))


function heapSort(arr){
    let n = arr.length 
    for(let i=Math.floor((n-1)/2) ; i>=0 ;i--){
        heapify(arr,n,i)
    }
    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr
}

function heapify(arr,n,i){
    let largest = n
    let left = 2 * i+1
    let right = 2 * i+2
    if(left < n && arr[largest]<arr[left]){
        largest = left
    }
    if(right < n && arr[largest]< arr[right]){
        largest = right
    }
    if(largest !== i){
        [arr[i],arr[largest]] = [arr[largest],arr[i]]
        heapify(arr,n,largest)
    }
}

let arr = [100,40,23,7,9]
console.log(heapSort(arr))