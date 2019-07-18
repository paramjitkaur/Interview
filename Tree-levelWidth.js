const Node = require('./Tree.js').Node
const  Tree = require('./Tree.js').Tree

let root= new Node(0)
let node1= new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
node1.add(4)
node3.add(5)

root.add(node1)
root.add(node2)
root.add(node3)
const tree = new Tree()
tree.root= root


function levelWidth(root){
    let arr =[root,'s']
    let widths=[0]
    while(arr.length > 1){
        const node = arr.shift()

        if(node == 's'){
            widths.push(0)
            arr.push('s')
        }
        else{
            for(const child of node.children)
            {
                arr.push(child)
            }
            widths[widths.length -1] ++
        }
    }
    return widths
}
console.log(JSON.stringify(tree))

console.log(levelWidth(root))