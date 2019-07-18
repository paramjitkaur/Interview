/**Given a string returns the the character that is mostly commonly used in the string
 *maxChars('elephant') = e
 maxChars('Abrakadabra')  = a
 */

 function maxChars(str){

    if(str === '')
    return 

    const chars =str.split('')
    let charObj ={}
    for(const char of chars){
        charObj[char] =charObj[char]? charObj[char] + 1 : 1
    }
    let maxCharVal= 0
    let maxChar=''
    for (const key of Object.keys(charObj)) {
        maxChar = charObj[key] > maxCharVal ? key :  maxChar
        maxCharVal = charObj[key] > maxCharVal ? charObj[key] : maxCharVal
    }
    console.log(charObj)
    console.log('max Value is ' + maxCharVal)
    console.log('max Char is ' +  maxChar)
 }

 maxChars('hgashxghasghsgchsdchdghsdghc')