/**Given an array and size divide the array into many subarrays where each subarray is of length size  */

function Chunk (array,size){
    const chunkedArr = []
    let index= 0
    while(index < array.length)
    {
        chunkedArr.push(array.slice(index,index+size))
        index+=size
    }
    console.log(chunkedArr)
    return chunkedArr

}

Chunk([1,2,3,4,5,6,7],2)