var makeNums = function (count) {
    if (count >= 101) return []
    let nums = []
    let createUniqueNum = function (i) {
        let num = Math.ceil(Math.random() * (i + 1) * 10)
        if (num >= 101 || nums.indexOf(num) > -1) {
            return createUniqueNum(i)
        }
        return num
    }
    for (let i = 0; i < count; i++) {
        nums.push(createUniqueNum(i))
    }
    return nums
}
// console.log(makeNums(10))

module.exports = makeNums