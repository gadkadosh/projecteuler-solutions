/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/
'use static'

const isPrime = num => {
    for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
        if (num % i === 0) return false
    }
    return true
}

const primeFactors = num => {
    const range = []
    for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
        if (num % i === 0 && isPrime(i)) range.push(i)
    }
    return range
}

console.log(Math.max(...primeFactors(600851475143)))
