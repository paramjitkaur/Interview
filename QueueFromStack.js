/**  Implement the Queue using two stacks */

class Stack{
    constructor(){
        this.data = []
    }
    push(element){
        return this.data.push(element)
    }

    pop(){
        return this.data.pop()
    }
    print(){
        return this.data
    }
    peek(){
        return this.data[this.data.length -1]
    }
}

class Queue{
    constructor(){
        this.firstStack = new Stack()
        this.secondStack = new Stack()
    }
    push(element){
        return this.firstStack.push(element)
    }
    pop(){
        while(this.firstStack.peek()){
            this.secondStack.push(this.firstStack.pop())
        }
        const removedData = this.secondStack.pop()
        while(this.secondStack.peek())
        {
            this.firstStack.push(this.secondStack.pop())
        }
        return removedData
    }
    peek(){
        while(this.firstStack.peek()){
            this.secondStack.push(this.firstStack.pop())
        }
        const peekedData = this.secondStack.peek()
        while(this.secondStack.peek())
        {
            this.firstStack.push(this.secondStack.pop())
        }
        return peekedData
    }
    print(){
        return this.firstStack.print()
    }
}


const queue = new Queue()
console.log(queue.push('1'))
console.log(queue.push('2'))
console.log(queue.push('3'))
console.log(queue.push('4'))
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.print())
console.log(queue.peek())



