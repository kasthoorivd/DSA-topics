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


