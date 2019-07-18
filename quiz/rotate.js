/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
     //1. nums.unshift(...nums.splice(nums.length - k));
     // 2.nums.splice(0,0,...nums.splice(nums.length -k))
     //3.
     for(let i =0 ; i< k; i++){
         nums.unshift(nums.pop())
         console.log(nums)
     }
    return nums
    
};
console.log(rotate([-1,-100,3,99],2))