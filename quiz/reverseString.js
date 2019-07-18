function reverse(str)
{
    if(!str.length)
    return 
    let rev=''
    for(let i = str.length ; i > 0; i--)
    {
        rev += str.substring(i-1,i)
    }
    console.log(rev)
}

function reverse2(str)
{
    const arr = str.split('')
    console.log(arr.reverse().join(''))

}
function reverse3(str)
{
    
}
reverse('first')
reverse2('apple')
