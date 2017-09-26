'use static'

const fibonacci = index => {
    if (index === 0) return 1
    if (index === 1) return 2
    return fibonacci(index - 2) + fibonacci(index - 1)
}

const sequence = []
for (let i = 0; fibonacci(i) <= 4000000; i++) {
    sequence.push(fibonacci(i))
}

console.log(sequence.filter(x => x % 2 === 0).reduce((acc, x) => acc + x))
