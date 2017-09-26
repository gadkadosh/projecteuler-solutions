'use strict'

// Should try with Promises (and Generators?) - to catch the first result and stop

const R = require('ramda')

//const range = (start, end) => {
//    if (start > end) return []
//    return [start, ...range(start + 1, end)]
//}

const range = (start, end) => {
    const array = []
    for (let i = start; i <= end; i++)
        array.push(i)
    return array
}

const square = x => x * x

const _flatten = arr => arr.reduce((acc, x) => {
    return acc.concat(x)
}, [])

//const array2d = range(1, 4)
//    .reduce((acc, a) => [...acc, range(a + 1, 4).map(b => ({ a, b }))], [])

const calcPyth = obj => {
    const c = Math.sqrt(square(obj.a) + square(obj.b))
    return Object.assign({}, obj, {c})
}

const calcRes = obj => {
    const c = Math.sqrt(square(obj.a) + square(obj.b))
    if (obj.a + obj.b + c === 1000) {
        return Object.assign({}, obj, {c})
    } else {
        return undefined
    }
}

const pythSumEqX = (obj, sum) => obj.a + obj.b + obj.c === sum

const array = _flatten(range(1, 999).map((a, index, arr) => {
    return range(a + 1, 999).map(b => ({ a, b }))
}))

//const arrayRes = array.map(x => calcPyth(x))
//    .filter(x => Number.isInteger(x.c))
//    .filter(x => pythSumEqX(x, 1000))

const arrayRes = array.map(x => calcRes(x))
    .filter(x => x != undefined)

console.log(arrayRes)

const result = arrayRes.length === 1
    ? `${arrayRes[0].a} + ${arrayRes[0].b} + ${arrayRes[0].c} = 1000`
    : 'More than one result!'

console.log(arrayRes[0].a * arrayRes[0].b * arrayRes[0].c)





//const pythArray = R.flatten(array).map(x => {
//    return {a: x.a, b: x.b, c: Math.sqrt(square(x.a) + square(x.b))}
//}).filter(x => Number.isInteger(x.c))
//
//const pythArrEq1000 = pythArray.filter(x => x.a + x.b + x.c === 1000)
//
