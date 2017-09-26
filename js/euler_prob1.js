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
