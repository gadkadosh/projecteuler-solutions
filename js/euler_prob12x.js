'use static'

const _ = require('lodash/fp')

const _range = _.curry((start, end) => {
    const array = []
    for (let i = start; i <= end ; i++) {
        array.push(i)
    }
    return array
})

const _rangeFromOne = _range(1)

const _map = _.curry((fn, array) => array.map(fn))

const _filter = _.curry((fn, array) => array.filter(fn))

const _reduce = _.curry((fn, initial, array) => array.reduce(fn, initial))

const _prop = _.curry((prop, obj) => obj[prop])

const _add = (a, b) => a + b

//const _createObj = _.curry((name, x) => ({ [name]: x }))

const _createProperty = _.curry((name, x) => Object.assign({}, { [name]: x }))

const _eqLarger = _.curry((a, b) => b >= a)

const calcTriangular = _.memoize(num => {
    if (num <= 0) return 0
    return calcTriangular(num - 1) + num
})

const isDivisor = _.curry((a, b) => a % b === 0)

const countDivisors = num => {
    const tmp = _rangeFromOne(Math.ceil(Math.sqrt(num)))      // optimization: up to square root, but then double the found divisors
        .filter(isDivisor(num))
    return tmp.length * 2
}

//const findTriangular = _.compose(_map(_reduce(_add, 0)), _map(_rangeFromOne), _range)
const findTriangular = _.compose(_map(calcTriangular), _range)

const objectify = _.compose(_map(_createProperty('number')), findTriangular)

const findTriDivisors = _.compose(_map(x => {
    return Object.assign({}, x, { divisors: countDivisors(x.number) })
}), objectify)

const divOver = _.curry((limit, obj) => _prop('divisors', obj) > limit)

const findTriDivisorsOver = _.compose(_filter(divOver(500)), findTriDivisors)





const findTriHighDivisors = (num, limit) => {
    const triNum = calcTriangular(num)
    const divisors = countDivisors(triNum)
    if (divisors > limit) return { num, triNum, divisors }
    console.log(`num: ${num}, triNum: ${triNum}, divisors: ${divisors}`)
    return findTriHighDivisors(num + 1, limit)
}

//const findTriHighDivisors = (num, limit) => {
//    let triNum = calcTriangular(num)
//    let divisors = countDivisors(triNum)
//    while (divisors < 500) {
//        triNum = calcTriangular(num)
//        divisors = countDivisors(triNum)
//        console.log(`num: ${num}, triNum: ${triNum}, divisors: ${divisors}`)
//        num++
//    }
//    return { num, triNum, divisors }
//}




console.log('Found:', findTriHighDivisors(1, 600))




//console.log(findTriDivisorsOver(1, 13000))
//console.log(findTriDivisorsOver([{ number: 1653, divisors: 8 }]))
