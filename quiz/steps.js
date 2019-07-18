/**WAP that accepts a positive number N and should console.log  a step shape
 * with N levelsusing the # character.Make sure that the sptep has a space on its right
 * Steps(2) 
'# '
'##'

Steps(3) 
'#  '
'## '
'###'
 */

function Steps(N)
{
    for (let index = 0; index < N; index++) {
        let stepSeq =''
        for (let innerIndex = 0; innerIndex <= index; innerIndex++) {
            stepSeq=stepSeq+ '#'
        }
        console.log(stepSeq)
    }
}

Steps(5)