var removeDuplicates = function(nums) {
    let i = 0, j = 1,len = 1
    const initialLength =nums.length
    if(initialLength == 0){
        return 0
    }
    while(j < initialLength){
        if(nums[i] == nums[j]){
                j++
            }
        else{
            nums[i +1] = nums[j]
            j++
            i++
            len++
        }
    }
    return len
};
const nums = []
const len = removeDuplicates(nums)
for(let i =0 ; i< len ; i ++){
    console.log(nums[i])
}

function HasDusplicate(arr){
    const map ={}
    for(let i =0 ;i< arr.length ; i++){
            map[arr[i]] = map[arr[i]] +1 || 1  
            if(map[arr[i]] > 1) return true;
    }
    return false
    
}

/**
 *   Single Number
  Go to Discuss
Given a non-empty array of integers, 
every element appears twice except for one. Find that single one.
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(!nums || nums.length == 0)
        return
    const initialLength =nums.length
    const map={}
    for(let i = 0; i< initialLength ; i++){
        if(map[nums[i]])
        {
            delete map[nums[i]]
        }
        else{
            map[nums[i]] = 1
        }
    }
    return Object.keys(map).pop()
    
};
console.log(singleNumber([3,4,3,6,4,1,2,1,2]))
//console.log(HasDusplicate([1,2,3,4,5,7]))