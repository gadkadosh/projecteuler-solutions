/*
A palindromic number reads the same both ways. The largest palindrome made from
the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

'use strict'

// rangeByDigits :: Integer -> [Integer]
const rangeByDigits = x => {
    const start = Math.pow(10, x - 1);
    const end = Math.pow(10, x) - 1;
    return range(start, end);
};

//function itrRange(start, end) {
//    const array = [];
//    for (let i = start; i <= end; i++) {
//        array.push(i);
//    }
//    return array;
//}

// range :: (Integer, Integer) -> [Integer]
const range = (start, end) => {
    if (start > end) return [];
    return []
        .concat(start)
        .concat(range(start + 1, end));
};

// isPalindrome :: Integer -> Bool
const isPalindrome = num => {
    const str = num.toString();
    const strReversed = str.split('').reverse().join('');
    if (str === strReversed) return true;
    return false;
};

//function products(arr_x, arr_y) {
//    const array = [];
//    for (let i = 0; i < arr_x.length; i++) {
//        for (let j = 0; j < arr_y.length; j++) {
//            array.push(arr_x[i] * arr_y[j]);
//        }
//        arr_y.shift();
//    }
//    return array;
//}

//function palProducts(arr_x, arr_y) {
//    const array = [];
//    for (let i = 0; i < arr_x.length; i++) {
//        for (let j = 0; j < arr_y.length; j++) {
//            const tmp = arr_x[i] * arr_y[j];
//            if (isPalindrome(tmp))
//                array.push(tmp);
//        }
//        arr_y.shift();
//    }
//    return array;
//}

//function products2(arr_x, arr_y) {
//    return arr_x.reduce((acc, val) => {
//        const tmpArr = arr_y.map(y => val * y)
//            .filter(isPalindrome)
//            .filter(x => !acc.includes(x));
//        arr_y.shift();
//        return acc.concat(tmpArr);
//    }, []);
//}

// productsObj :: Integer -> [{obj}]
const productsObj = (arr_x, arr_y = arr_x.concat([])) => {
    const array = arr_x.map(x => {
        return arr_y.map(y => ({
            x: x,
            y: y,
            product: x * y
        }));
    })
    .reduce((acc, part) => acc.concat(part), [])
    .filter(val => isPalindrome(val.product));
    return array;
};

// remDupes :: [Integer] -> [Integer]
const remDupes = array => {
    return array.reduce((acc, x) => {
        if (!acc.includes(x.product))
            return acc.concat(x.product);
        return acc;
    }, []);
};

const composeTwo = (f, g) => (...args) => f(g(...args));

//const n = composeTwo(remDupes, productsObj)(arr_x, arr_y);
//console.log(n.length);
const palArr = composeTwo(productsObj, rangeByDigits)(2);

const digPalLn = `The length of the palindromes array is ${palArr.length}`;
console.log(digPalLn);

const findMax = palArr.reduce((acc, x) => {
    if (x.product > acc.product) return x;
    return acc;
});
const highestPal = `The highest Palindrome number is ${findMax.x} x ${findMax.y} = ${findMax.product}`;
console.log(highestPal);
