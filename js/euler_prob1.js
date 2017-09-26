'use static'

const sum3_5_mults = limit => {
    range = []
    for (let i = 1; i <= limit; i++) {
        range.push(i)
    }

    multiples = range.filter(x => x % 3 === 0 || x % 5 === 0)
    return multiples.reduce((acc, x) => acc + x)
}

console.log(sum3_5_mults(1000))
