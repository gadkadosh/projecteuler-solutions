'use static'

const fp = require('lodash/fp')

let counter = 0

const nextWhenEven = n => n / 2

const nextWhenOdd = n => 3 * n + 1

const isEven = n => n % 2 === 0

const nextTerm = num => isEven(num) ? nextWhenEven(num) : nextWhenOdd(num)

//const getSequence = fp.memoize(start => {
//    counter++
//    if (start === 1) return [start]
//    return [start, ...getSequence(nextTerm(start))]
//})

const getSequence = (start, result = []) => {
    counter++
    result.push(start)
    if (start === 1) return result
    return getSequence(nextTerm(start), result)
}

const allSeqs = fp.range(1, 1000001).map(fp.ary(1, getSequence))
//console.log('Counter: ', counter)

console.log(allSeqs.length)
//console.log(allSeqs)

const allLn = allSeqs.map(x => x.length)
const highestIndex = allLn.reduce((acc, x, index, arr) => arr[acc] >= arr[index] ? acc : index, 0)

console.log(allSeqs[highestIndex])
console.log('Length: ', allSeqs[highestIndex].length)
console.log('First term: ', allSeqs[highestIndex][0])


//console.log(getSequence(13))
//console.log(getSequence(20))
