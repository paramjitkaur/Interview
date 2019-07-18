function reverseInt(num){
    const sign = Math.sign(num)
    console.log(sign)
    let reversed = num.toString().split('')
    if(sign === -1)
    {
        reversed = reversed.slice(1,reversed.length)
    }

    reversed = sign === -1 ? sign * reversed.reverse().join(''): reversed.reverse().join('')
    return parseInt(reversed)
}
console.log(reverseInt(-800))