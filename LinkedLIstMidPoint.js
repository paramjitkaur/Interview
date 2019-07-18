const LinkedList = require('./linkedList1')

const linkedList = new LinkedList()


linkedList.InsertLast(1)
linkedList.InsertLast(2)
linkedList.InsertLast(3)
linkedList.InsertLast(4)
linkedList.InsertLast(5)
linkedList.InsertLast(6)


console.log(JSON.stringify(linkedList))
console.log(linkedList.Midpoint())