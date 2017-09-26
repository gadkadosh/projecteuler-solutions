/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains
10 terms. Although it has not been proved yet (Collatz Problem), it is thought
that all starting numbers finish at 1.
Which starting number, under one million, produces the longest chain?
NOTE: Once the chain starts the terms are allowed to go above one million.
*/

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
