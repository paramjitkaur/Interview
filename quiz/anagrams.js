/** check two strings to be anagrams if both of them have exact the same characters in the same quantity 
 * Only consider characters  not spaces not punctuations and it should be case insensitive
 * 
*/

function Anagrams1(stringA,stringB)
{
    console.log(stringA.replace(/[^\w]/g,'').toLowerCase().split('').sort().join(''))
    console.log(stringB.replace(/[^\w]/g,'').toLowerCase().split('').sort().join(''))
return stringA.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('') === stringB.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')

}






function Anagrams(stringA,stringB ){
    let objMapA = generateMap(stringA)
    let objMapB = generateMap(stringB)
    console.log(objMapA)
    console.log(objMapB)
    let isAnagram 
    for (const key of Object.keys(objMapA)) {
        if(objMapB && objMapB[key] && objMapB[key] === objMapA[key])
        {
            
            isAnagram = true 
        }
        else{ 
            isAnagram = false
            return false
        }
    }
    return isAnagram

}
function generateMap(str)
{
    let objMap ={}
    let arr =str.replace(/[^\w]/g,'').toLowerCase().split('')
    for (let i = 0; i < arr.length; i++) {
        objMap[arr[i]] = objMap[arr[i]]?objMap[arr[i]] +1 : 1
    }
    return objMap
}

console.log(Anagrams1('fairy!! tales','rail safety'))