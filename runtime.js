/**
 * @url https://leetcode.com/problems/shuffle-an-array
 */

/**
 * @param {number[]} nums
 */
const Solution = function(nums) {
    this.original = nums
};
/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let shuffled = []
    let len = this.original.length
    do {
        let random = Math.floor(Math.random() * len)
        let current = this.original[random]
        if (shuffled.indexOf(current) == -1) {
            shuffled.push(current)
        }
    } while (shuffled.length !== len)
    return shuffled

    // other solution
    // const len = this.original.length
    // for (let i = 0; i < len; i++) {
    //     const random = Math.floor(Math.random() * len)
    //     const temp = this.original[random]
    //     this.original[random] = this.original[i]
    //     this.original[i] = temp
    // }
    // return this.original
};

const solution = new Solution([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// const solution = new Solution(['a', 'b', 'c', 'd']);
const param_1 = solution.reset()
const param_2 = solution.shuffle()
console.log('reset', param_1)
console.log('shuffle', param_2)