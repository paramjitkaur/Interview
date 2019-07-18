 function LinkedList() {

 this.length =0
    this.head = null

    const Node =function(element){
        this.element = element
        this.next = null
    }
    this.empty = function(){
        return this.length == 0
    }
    this.size = function(){
        return this.length
    }
    this.add = function(element)
    {
        const node = new Node(element)
        if(this.head == null )
        {
            this.head = node
        }
        else{
            let currentNode = this.head
            while(currentNode.next)
            {
                currentNode = currentNode.next
            }
            currentNode.next = node

        }
        this.length ++
    }

    this.remove = function(element){
        let currentNode = this.head
        let previousNode 
        if(currentNode.element == element)
        {
                this.head = currentNode.next
        }
        else{
            while(currentNode.element !== element){
                previousNode = currentNode
                currentNode = currentNode.next

            }
            previousNode.next =currentNode.next
        }
        this.length --
    }

}
LinkedList.prototype.print  = function (params) {
    console.log(JSON.stringify(this.head))
}

var congo = new LinkedList()
congo.add('foo')
congo.add('bar')
congo.add('baz')
congo.add('bam')
console.log(congo)
console.log(congo.size())
console.log(congo.print())
console.log(congo.size())