var queue = function Queue(){
    this.data = []
     this.push= function(element){
        this.data.push(element)
        return this.data
     }
     this.pop = function(){
         return this.data.shift()
     }
     this.peek = function(){
         return this.data[this.data.length -1]
     }
     this.size = function(){
         return this.data.length
     }
}
class stackFromQueue{
    constructor(){
        this.firstQueue = new queue()
        this.secondQueue = new queue()
    }

    push(element){
        this.firstQueue.push(element)
        return this.firstQueue
    }
    pop(){
       
        while(this.firstQueue.peek() && this.firstQueue.size() > 1)
        {
            console.log('here'+this.secondQueue.peek() + 'size is '+this.secondQueue.size() )
            this.secondQueue.push(this.firstQueue.pop())
            console.log(this.secondQueue.size())
        }
        const removedItem = this.firstQueue.pop()
        const temp = this.firstQueue
        this.firstQueue = this.secondQueue
        this.secondQueue =temp
        return removedItem


    }

}

const stack = new stackFromQueue()
stack.push(11)
stack.push(22)
stack.push(33)
stack.push(44)
stack.push(55)
console.log(stack.pop())