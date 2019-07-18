const myQueue =[]
myQueue.push(1)
myQueue.push(2)
myQueue.push(3)
myQueue.push(4)

console.log("My Queue is " + myQueue)

myQueue.shift()
myQueue.shift()
console.log("NEW Queue is " + myQueue)

/**Queue implementation using functions */

const Queue1 = function(){
    const collection= []

    this.push =function(value){
          collection.push(value)
        return  collection

    }

    this.pop = function(){
         collection.shift()
        return  collection
    }

}

/**Queue implementation using classes */
class Queue {
    constructor(){
        this.data =[]
    }
    add(element){
        return this.data.push(element)
        
    }

    remove(){
        return this.data.shift()
        
    }

    peek(){
        return this.data[this.data.length-1]
    }
    print(){
        return this.data
    }

}



const myq= new Queue();
console.log(myq.add(1))
console.log(myq.add(2))
console.log(myq.add(3))
console.log(myq.peek())
console.log(myq.add(4))
console.log(myq.peek())
console.log(myq.remove())

function weave(queue1, queue2){
    let newQueue = new Queue()
    while(queue1.peek() || queue2.peek()){
        if(queue1.peek())
        {
            newQueue.add(queue1.remove())
        }
        if(queue2.peek())
        {
            newQueue.add(queue2.remove())
        }
    }
    return newQueue

}
const queueA = new Queue()
queueA.add('1')
queueA.add('2')
queueA.add('3')
queueA.add('4')
console.log(queueA)
const queueB = new Queue()
queueB.add('hi')
console.log(queueB)
console.log(weave(queueA,queueB))

