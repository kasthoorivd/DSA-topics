let str = 'hello world'

function reverse(str){
    if(str.length==0){
        return ''
    }

    return reverse(str.slice(1)) + str[0]
}

let res = str.split(' ').map(reverse).join(' ')

console.log(res)