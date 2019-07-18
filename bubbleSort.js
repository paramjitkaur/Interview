
function selectionSort(arr)
{
    for(let i = 0; i< arr.length;i++)
    {
        let indexOfMin = i
        for(let j =i+1;j< arr.length;j++){
            if(arr[indexOfMin] > arr[j])
            {
                indexOfMin=j   
            }          
        }
        if(indexOfMin !== i)
        {
            const lesser = arr[indexOfMin]
                arr[indexOfMin] = arr[i]
                arr[i] = lesser
        }
    }
    return arr
}
function bubbleSort(arr){
    for(let i =0; i< arr.length;i++)
    {
        for(let j=0; j<arr.length - i-1;j++){
            if(arr[j] > arr[j+1])
            {
                const temp = arr[j+1]
                arr[j+1]=arr[j]
                arr[j] = temp
            }
            
        }
    }
    return arr
}


console.log(bubbleSort([12,3,76,8,98,4,6]))
console.log(selectionSort([10,0,97,-30,5]))