/**
 * @url https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    const mynums = {}
    for (let i = 0; i < nums.length; i++) {
        let remaining = target - nums[i]
        if (remaining in mynums) {
            return [mynums[remaining], i]
        }
        mynums[nums[i]] = i
    }
    return []
}


console.log(twoSum([2,7,11,15], 9)) // [0,1]
console.log(twoSum([3,2,4], 6)) // [1,2]
console.log(twoSum([3,3], 6)) // [0,1]


// more example
// const makeNums = require("../testRepeatNums")
// const nums = makeNums(15)
// console.log(nums)
// console.log(twoSum(nums, 80))