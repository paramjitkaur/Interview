function Merge(left, right){
    const result =[]
    while(left.length  && right.length ){
        if(left[0] < right[0])
        {
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
    if(right.length > 0){
        for(let item of right)
        {
            result.push(item)
        }
    }
    return result
}


function MergeSort(arr){
    if (arr.length == 0)
    return
    if(arr.length == 1){
        return arr
    }
    const center = Math.floor(arr.length/2)
    const left = arr.slice(0,center)
    const right = arr.slice(center)
    
    return Merge(MergeSort(left),MergeSort(right))

}
console.log(MergeSort([2,1,5,6,7,-30,27,0,97]))