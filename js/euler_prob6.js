'use strict';

const sum = (array) => array.reduce((acc, x) => acc + x, 0);

const square = (num) => num * num;

const range = (start, end) => {
    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
};

const x = 100;
const squareSum = square(sum(range(1, x)));
const sumSquare = sum(range(1, x).map(square));

const difference = `The difference between the sum of the squares of the first ${x} natural numbers and the square of the sum is ${squareSum} - ${sumSquare} = ${squareSum - sumSquare}`;
console.log(difference);


//const composeTwo = (f, g) => (...args) => g(f(...args));
//const squareOfSum = composeTwo(sum, square)(range(1, 10));
//console.log(squareOfSum);
