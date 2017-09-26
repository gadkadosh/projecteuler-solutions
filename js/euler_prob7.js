/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
we can see that the 6th prime is 13.
What is the 10 001st prime number?
*/
'use strict'

const isPrime = (num) => {
    if (num % 2 === 0) return false;
    const roundedSqrt = Math.ceil(Math.sqrt(num));
    const range = getRange(2, roundedSqrt);
    return !range.some(x => num % x === 0);
}

const getRange = (start, end) => {
    const range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}

const primeList = (length) => {
    const array = [];
    let i = 2; // considerin 1 not prime
    while (array.length < length) {
        if (isPrime(i)) array.push(i);
        i++;
    }
    return array;
}

const x = 10001;
const prArr = primeList(x);
const xPrime = `The ${x}th prime number is: ${prArr[prArr.length - 1]}`;

console.log(prArr);
console.log(xPrime);
