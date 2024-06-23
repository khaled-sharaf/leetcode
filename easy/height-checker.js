/**
 * @url https://leetcode.com/problems/height-checker/
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const expected = [...heights].sort((a, b) => a - b)
    const matched = []
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] === expected[i]) {
            matched.push(i)
        }
    }
    return heights.length - matched.length
}

var heightChecker2 = function(heights) {
    const expected = [...heights].sort((a, b) => a - b)
    let matched = 0
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            matched++
        }
    }
    return matched
}


console.log(heightChecker2([1,1,4,2,1,3])) // 3
console.log(heightChecker2([5,1,2,3,4])) // 5
console.log(heightChecker2([1,2,3,4,5])) // 0
console.log(heightChecker2([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7])) // 22