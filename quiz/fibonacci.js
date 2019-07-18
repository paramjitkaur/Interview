function slowfibonacci(n)
{
    if(n < 2)
    return n 
    else {
    const res =slowfibonacci(n-1) + slowfibonacci(n-2)
    console.log(res)
    return res
    }
}



function fibonacciSEriesGen(n)
{
    let result =[0,1]
    for(let i= 2;i< n; i++)
    {
        result.push(result[i-1]+result[i-2])
    }
    return result
}

function fibonacciSeriesGen(n)
{
    let array=[]
    for (let index = 0; index < n; index++) {
        array.push(Memoize(slowfibonacci))
    }
    return array
}

const add = (n) => (n + 10);
// function Memoize(fn){
//     const cache ={}
//     return function(...args){
//         console.log(...args)
//         if(cache[args]){
//             return cache[args]
//         }
//         const result = fn.apply(this,args)
//         cache[args]=result
//         return result
//     }

// }

function Memoize(fn){
    const cache={}
    return function(...args){
        if(cache[args]){
            console.log('returning from cache')
            return cache[args]
        }
        const result =fn.apply(this,args)
        cache[args]=result
        console.log('Fresh')
        return result

    }
}
const memoizeFib =Memoize(slowfibonacci)
console.log(memoizeFib(5))
console.log(memoizeFib(5))
console.log(memoizeFib(6))
console.log(memoizeFib(6))