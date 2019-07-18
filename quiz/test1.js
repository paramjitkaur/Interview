//A function that accepts an array of poitive or negatibve numbers and Finds the max product 
//of any three numbers
function MaxProduct(numberList){
    const sorted = numberList.sort(function(a,b){return a-b}).reverse().splice(0,3)
    let product =1
    for(let i =0; i< 3; i++){
        console.log(sorted[i])
    product = product* sorted[i]
    }
    console.log(product)
}

//MaxProduct([-2,-3,-6,-2,-7,-10,-4,-8,7])

//A function that accepts array as an input and returns an index where the sum of the numbers on the left of the index
//is equal to the sum of the numbers on th right of the index and if there are multiple such indexes then return the first suck index


function OptimumIndex(array){
    let leftSum =0
    for(let i = 1 ; i<= array.length; i++){
        leftSum = leftSum + array[i-1]
        console.log('left:'+leftSum)
        let rightSum =0
        for(let j =array.length -1 ;j >i ; j--)
        {   
            rightSum += array[j]
            console.log('right'+rightSum)
        }
        if(leftSum == rightSum)
        {
            return i
        }
    }
    return -1
}

//console.log(OptimumIndex([1,7,3,6,5,6]))

//Design a maxStack that supports the following functions
//push() push element x into stack
//pop() pops out an element
//top get the top elemengt from the stack
//peekMax retrieve the max element from the stack
//popmax removes the max element from the stack

class stack {
    constructor(){
        this.arr = []
        this.counter =0
    }
    push(x){
        this.arr.push(x)
        this.counter ++
        return this.arr
    }
    pop (){
        this.arr.pop()
        this.counter --
        return this.arr
    }
    top (){
        return this.arr[this.counter -1]
    }
    peekMax(){
        const sortedAsc = this.arr.sort((a,b) => (a-b))
        return sortedAsc[this.counter -1]
    }
    peekMin(){
        const sortedAsc = this.arr.sort((a,b) => (a-b))
        return sortedAsc[0]
    }
    print(){
        return this.arr
    }
}


let myStack = new stack()
// console.log(myStack.push(3))
// console.log(myStack.push(41))
// console.log(myStack.push(19))
// console.log(myStack.push(6))


// console.log(myStack.pop())
// console.log(myStack.top())
// console.log(myStack.peekMax())
// console.log(myStack.peekMin())
// console.log(myStack.print())

function Merge(left,right){
    let result =[]
    while(left.length > 0 && right.length > 0){
        if(left[0] < right[0]){
            result.push(left.shift())
        }
        else{
            result.push(right.shift())
        }
    }
    if(left.length > 0){
        for(let item of left)
        {
            result.push(item)
        }
    }
    if(right.length > 0)
    {
        for(let item of right)
        {
            result.push(item)
        }
    }
    return result
}
function MergeSort(arr){
    if(arr.length == 1)
        return arr
    //first divide the arrays into half
    const center = Math.floor(arr.length/2)
    const left = arr.slice(0,center)
    const right = arr.slice(center)
    return Merge(MergeSort(left),MergeSort(right))
}

function BubbleSort(arr){
for(let i = 0; i< arr.length ; i ++){
    for(let j =0 ; j< arr.length - i ; j++){
        if(arr[j] > arr[j+1]){
            //swap here
            const temp = arr[j+1]
            arr[j+1] = arr[j]
            arr[j] = temp
        }
    }
}
return arr
}

function SelectionSort(arr){
    for(let i = 0; i< arr.length ; i ++){
        for(let j =i+1 ; j< arr.length  ; j++){
            if(arr[j] > arr[j+1]){
                //swap here
                const temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
    }

    function SelectionSort(arr){
        for(let i =0 ;i< arr.length; i++)
        {
            let indexOfMin =i
            for(let j =i +1 ; j< arr.length; j++){
                if(arr[j] < arr[indexOfMin]){
                   indexOfMin = j
                }
            }
            if(indexOfMin != i)
            {
                //swap
                const lesser = arr[indexOfMin]
                arr[indexOfMin] = arr[i]
                arr[i] = lesser
            }

        }
        return arr
    }
    class Node {
        constructor(data, next =null){
            this.data = data
            this.next = next
        }
    }
    class LinkedList{
        constructor(){
            this.head = null
        }
        InsertLast(data){
            const newNode = new Node (data)
            if(!this.head){
                this.head = newNode
            }
            else{
                let node = this.head
                while(node.next)
                {
                    node = node.next
                }
                node.next = newNode
            }
        }
        InserFirst(data){
            this.head = new Node(data,this.head)
        }
        InserAtIndex(data,i){
            let node = this.head
            const newNode = new Node(data)
            let counter =1
            if(! node )
            return
            //execute till prev node
            while(counter < i -1 ){
                if(node && node.next)
                {
                   return 
                }
                node = node.next
                counter ++
            }
            newNode.next = node.next
            node.next = newNode
        }
        RemoveFirst(){
            let node = this.head
            if(!node)
            {
                return
            }
            if(!node.next)
            {
                this.head = null
            }
            this.head = this.head.next


        }
        Midpoint(){
            let fast = this.head
            let slow = this.head
            
            while(fast.next && fast.next.next)
            {
                slow = slow.next
                fast = fast.next.next
            }
            return slow
        }
    }

class Stack{
    constructor(){
        this.data = []
    }
    push(element){
        this.data.push(element)
        return this.data
    }
    pop(){
        return this.data.pop()
        
    }
    peek(){
        return this.data[this.data.length -1]
    }
}

const myStack1 = new Stack()




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
}
// let myQueue = new queue()
// console.log(myQueue.push('a'))
// console.log(myQueue.push('b'))
// console.log(myQueue.push('c'))
// console.log(myQueue.push('d'))
// console.log(myQueue.push('k'))
// console.log(myQueue.peek())
// console.log(myQueue.pop())
//console.log(SelectionSort([11,-55,2,-88,9,33,156,34,-3]))

//Create Queue from stack

class queueFromStack{
    constructor(){
        this.firstStack = new Stack()
        this.secondStack = new Stack()
    }
    push(element){
        this.firstStack.push(element)
        return this.firstStack
    }

    pop(){

        while(this.firstStack.peek()){
            //push into the secondStack
            this.secondStack.push(this.firstStack.pop())
        }
        const removedItem = this.secondStack.pop()
        //pop put from the secon stack

        //again push everythong from the second and restore to first
        while(this.secondStack.peek()){
            this.firstStack.push(this.secondStack.pop())
        }
        return removedItem
    }
    peek(){
        while(this.firstStack.peek()){
            //push into the secondStack
            this.secondStack.push(this.firstStack.pop())
        }
        const peekedItem = this.secondStack.peek()
        //pop put from the secon stack

        //again push everythong from the second and restore to first
        while(this.secondStack.peek()){
            this.firstStack.push(this.secondStack.pop())
        }
        return peekedItem
    }
}

let qFromStack = new queueFromStack()
console.log(qFromStack.push(11))
console.log(qFromStack.push(22))
console.log(qFromStack.push(33))
console.log(qFromStack.push(44))
console.log(qFromStack.push(55))
console.log(qFromStack.push(66))
console.log(qFromStack.pop())
console.log(qFromStack.peek())





