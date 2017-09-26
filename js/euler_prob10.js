/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
*/

'use strict'

const R = require('ramda')
//const _ = require('lodash/fp')

const isPrime = num => {
    if (num % 2 === 0) return false     // Optimization
    const tmp = range(3, Math.ceil(Math.sqrt(num))) // Optimization
//    const tmp = range(3, num - 1)
    return tmp.every(x => num % x != 0)
}

const rangeRecursive = (start, end, arr) => {
    if (start > end) return arr
    return [start].concat(range(start + 1, end))
}

const range = R.curry((start, end) => {
    const arr = []
    for (let i = start; i <= end; i++) {
        arr.push(i)
    }
    return arr
})

const _filter = R.curry((fn, arr) => arr.filter(fn))

const _reduce = R.curry((fn, initial, arr) => arr.reduce(fn, initial))

const _add = R.curry((a, b) => a + b)

const _sum = _reduce(_add, 0)

const primeSum = R.compose(_sum, _filter(isPrime), range)

//console.log(array)
console.log(primeSum(1, 200000)) // Original: below 2 million
