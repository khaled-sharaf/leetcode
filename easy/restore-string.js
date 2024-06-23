/**
 * @url https://leetcode.com/problems/restore-string/
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let resultObj = {}
    for (let i = 0; i < s.length; i++) {
        resultObj[indices[i]] = s[i]
    }
    return Object.values(resultObj).join('')
};

console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3])) // leetcode
console.log(restoreString('abc', [0,1,2])) // abc