const startTimestamp = Math.floor(Date.now())
var getTime = function() {
    const endTimestamp = Math.floor(Date.now())
    let time = endTimestamp - startTimestamp
    let second = time >= 1000
    let result = second ? (time / 1000).toFixed(3) : time
    console.log(result + (second ? ' s' : ' ms'))
    return result
}


getTime()