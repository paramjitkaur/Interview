const arr = []
arr.push(1)
arr.push(2)
arr.push(3)
arr.push(4)

console.log(arr)
arr.pop()
console.log(arr)
/****** WRITING A FUNCTION****************** */

const Stack = function() {
    let storage={}
    let count=0

    this.push =function(value){
         storage[count] = value
        count ++
        return  storage
    }

    this.pop = function(){
        if(count === 0 )
        return
        count --

        delete  storage[count]
        return  storage
    }

    this.length = function(){
        return count
    }

}

const myStack = new Stack()
console.log(myStack.push(1))
console.log(myStack.push(2))
console.log(myStack.push(3))
console.log(myStack.push(4))
console.log('length is' + myStack.length())

console.log(myStack)
myStack.pop()
console.log(myStack)

console.log('length is' + myStack.length())


/**Stack using classes */

class StackUsingClass{
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
}

const stack1= new StackUsingClass()
console.log('Here is the class implemenattion')
console.log(stack1.push('1'))
stack1.push('2')
stack1.push('3')
console.log(stack1.print())
console.log(stack1.pop())

