function Palindrome(str){
    const reversed = str.split('').reverse().join('')
    if(str == reversed)
        console.log(str+' YES YES its a palindrome')
    else{
        console.log(str+' No its not a palindrome')
    }
}

function Palindrome1(str){
    return str.split('').every((char,i) => {
        return char === str[ str.length - i -1]
    })


}



console.log(Palindrome1('madam'))