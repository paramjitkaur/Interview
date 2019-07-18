class Node {
    constructor(data, next= null){
    this.data = data
    this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head  = null
    }

    InsertFirst(element){
        this.head = new Node(element,this.head)
    }
    Size(){
        let size = 0
        let node = this.head
        while(node)
        {
            node = node.next
            size++
        }
        return size
    }
    GetFirst(){
        return this.head
    }
    GetLast(){
        if(!this.head){
            return null
        }
        let node = this.head
        while(node){
            if(!node.next)
            {
                return node
            }
            node = node.next
        }
        return lastElement
    }
    Clear(){
        this.head = null
    }
    RemoveFirst(){
        if(this.head)
        {
            return null
        }
        this.head = this.head.next
    }
    RemoveLast(){
        if(!this.head)
        {
            return null
        }
        if(!this.head.next){
            this.head = null
            return
        }
        let previous=this.head
        let node = this.head.next
        while(node.next)
        {
            previous = node
            node = node.next
        }
        previous.next = null

    }

    InsertLast(element){
        const newNode = new Node(element)
        if(!this.head)
        {
            this.head = newNode
            return
        }
        let node = this.head
        while(node.next){
            node = node.next
        }
        node.next = newNode
    }

    GetAt(index){
        let counter = 0
        if(!this.head)
        return null
        let node = this.head
        while(node.next){
            if(counter === index)
            {
                return node
            }
            node = node.next
            counter ++
        }
        return null
    }

    RemoveAt(index){
        if(!this.head)
        {
            return 
        }
        if(index == 0)
        {
            this.head = null
        }
        const previousNode = this.GetAt(index - 1)
        if(!previousNode || previousNode.next)
        {
            return
        }
        previousNode.next = previousNode.next.next
    }

    InserAt(data,index){
        const newNode = new Node(data)
        if(!this.head)
        {
            this.head = newNode
        }
        let prevNode = this.GetAt(index - 1)
        if(!prevNode || !prevNode.next)
        {
            
        }
        else
        {
            newNode.next = prevNode.next
            prevNode.next = newNode
        }
    }
    Midpoint(){

        let slow
        let fast
        if(!this.head)
        {

            
            return 
        }
        slow = this.head
        fast = this.head
        while(fast.next && fast.next.next)
        {
            slow= slow.next
            fast= fast.next.next
        }
        return slow

    }

    revrese(){
        let node = this.head
        let previous ,tmp = null
        while(node){
            // save next or you lose it!!!
            tmp = node.next
            // reverse pointer
            node.next = previous
            // increment previous to current node
            previous = node
             // increment node to next node or null at end of list
            node = tmp

        }
        console.log(JSON.stringify(previous))
        return previous

    }

    
}

module.exports= LinkedList

let list = new LinkedList()
 list.head = new Node(10)
  list.InsertFirst(20)
 list.InsertFirst(30)
 list.InsertFirst(40)
 list.InsertFirst(50)
 list.InsertFirst(60)
 console.log(JSON.stringify(list))
 console.log(list.revrese())

// console.log('The list is '+JSON.stringify(list))
//console.log('Size of the list is '+list.Size())
//console.log('First Element in the list is' +JSON.stringify(list.GetFirst().data))
//console.log('Last Element in the list is' +JSON.stringify(list.GetLast()))
//list.Clear()
//list.RemoveFirst()
//console.log('First elemnt is removed' +JSON.stringify(list))
//console.log(JSON.stringify(list))
//list.RemoveLast()
//console.log('The list is '+JSON.stringify(list))
// list.InsertLast(88)
// console.log('The list is '+JSON.stringify(list))
// console.log(list.GetAt(0))
// list.RemoveAt(1)
// console.log('The list is '+JSON.stringify(list))
// list.InserAt(66,1)
// console.log('The list is '+JSON.stringify(list))