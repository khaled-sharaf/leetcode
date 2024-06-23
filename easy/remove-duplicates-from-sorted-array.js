/**
 * @url https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) > -1 && nums.indexOf(nums[i]) != nums.lastIndexOf(nums[i])) {
            nums.splice(i, 1, '_')
        }
    }
    for (let x = nums.length - 1; x >= 0; x--) {
        if (nums[x] == '_') {
            nums.splice(x, 1)
        }
    }
    return nums.length
};


// var removeDuplicates = function(nums) {
//     let k = 1; // Initialize the count of unique elements to 1
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[k - 1]) {
//             nums[k] = nums[i]; // Overwrite the next unique element
//             k++;
//         }
//     }
//     return k;
// };

console.log(removeDuplicates([1,1,2])) // 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // 5
console.log(removeDuplicates([1,1,1,1])) // 1