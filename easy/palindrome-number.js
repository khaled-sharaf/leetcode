/**
 * @url https://leetcode.com/problems/palindrome-number
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x.toString() == x.toString().split('').reverse().join('')
}

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) // false9