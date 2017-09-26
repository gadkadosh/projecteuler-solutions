const R = require('ramda');

'use strict';

const SOURCE = `7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450`;

// intToArr :: Int -> Arr
const intToArr = x => x.toString().split('');

// product :: [Integer] -> Integer
// const product = arr => arr.reduce(mult, 1);

const mult = (x, y) => x * y;

// createAdjArr :: [Integer] -> [{values: [Integer]}]
const createAdjArr = R.curry((ln, array) =>
    array.map((x, i) => array.slice(i, i + ln))
        .map(x => ({ values: x }))
        .filter(x => x.values.length === ln)
        .map(addProduct));

const addProduct = x =>
    Object.assign(x, { product: x.values.reduce(mult, 1) });

const findHighest = array =>
    array.reduce((acc, x) =>
        x.product > acc.product ? x : acc);

//const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

/* The original objective of the problem */
const createAdjArrX = createAdjArr(13);

const combined = R.compose(createAdjArrX, intToArr);
const highest = findHighest(combined(SOURCE));

//const combined = R.compose(findHighest, createAdjArrX, intToArr);
//const highest = combined(SOURCE);

const highestStr = `${highest.values.join(' x ')} = ${highest.product}`
console.log(highestStr);

/* This one is to find the highest possible product of any number of adjacent digits in the source number */
//const sourceArr = intToArr(SOURCE);
//const highestArr = [];
//let n = 1;
//while (n <= 1000) {
//    const arr = createAdjArr(n, sourceArr);
//    const highest = findHighest(arr);
//    if (highest.product === 0) break;
//    highestArr.push(highest);
//    n++;
//}
//
//const highest = (findHighest(highestArr));
//const highestStr = `${highest.values.join(' x ')} = ${highest.product}`
//console.log(highestStr);
//console.log(`those were ${highest.values.length} adjacent digits`)
