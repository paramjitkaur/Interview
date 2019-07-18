//*Detect whethere a linked list is circular or not
const LinkedList = require('./linkedList1')


function isCircular(list)
{
    let slow =list.head
    let fast= list.head
    if(!list.head)
    {
        return null
    }
        while(fast.next && fast.next.next )
        {
            slow= slow.next
            fast= fast.next.next
            if(slow === fast)
            return true
        }
        return false
}

let list = new LinkedList()
list.InsertLast(1)
list.InsertLast(2)
