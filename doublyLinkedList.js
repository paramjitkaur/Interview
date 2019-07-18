function Node(element){
this.head = null
this.tail= null
this.element = element
}

function DoublyLinkedList(){
    this.head = null
    this.tail = null
    this.length=0
}

DoublyLinkedList.prototype.push =function(element){
    this.node = new Node(element)
    if(!this.head)
    {
        this.head = this.node
        this.tail = this.node
    }
    else{
        this.node.head =this.tail
        this.tail.next =this.node
        this.tail = this.node
    }
}

DoublyLinkedList.prototype.print = function(){
   
}