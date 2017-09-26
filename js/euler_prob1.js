/*
If we list all the natural numbers below 10 that are multiples of
3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

'use static'

const sumMults3_5 = limit => {
    range = []
    for (let i = 1; i <= limit; i++) {
        range.push(i)
    }

    multiples = range.filter(x => x % 3 === 0 || x % 5 === 0)
    return multiples.reduce((acc, x) => acc + x)
}

console.log(sumMults3_5(1000))
