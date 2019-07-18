class Node{
    constructor(data){
        this.data= data
        this.children = []
    }
    add(data){
        this.children.push(new Node(data))
    }
    Remove(data){
        this.children - this.children.filter(x => x.data !== data)
    }
}

class Tree{
    constructor(){
        this.root = null
    }
    traverseBFS(fn){
        let arr = [this.root]
        while(arr.length)
        {
            const node = arr.shift()
            console.log(node)
            for(const child of node.children)
            {
                arr.push(child)
            }
            fn(node)
        }
        return arr
    }
    traverseDFS(fn){
        let arr = [this.root]
        while(arr.length){
            const node = arr.shift()
            for(const child of node.children ){
                arr.unshift(child)
            }
            fn
            fn(node)
        }
        return arr
    }
    
}

module.exports ={Tree, Node}

//Output

let node1 = new Node('CEO')
let node2 = new Node('CTO')
let node3 = new Node('CMO')
let node4 = new Node('COO')
let node5= new Node('VP OF engg')
node1.add(node2)
node1.add(node3)
node1.add(node4)
node2.add(node5)
node2.add('VP DevOPs')
node1.add('VP Analytics')
node3.add('VP OF SEO')
node3.add('VP Of Creative')
node4.add('VP of KLO')
node5.add('Eng1')
node5.add('Eng2')
node5.add('Eng3')
node5.add('Eng4')

const tree = new Tree()
tree.root=node1
console.log(JSON.stringify(tree))
// tree.traverseBFS(function (value) {
// return JSON.stringify(value.data.data)
// })



