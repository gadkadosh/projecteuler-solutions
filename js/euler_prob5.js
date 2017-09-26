'use strict';

const divByUpTo10 = (num) => {
    const factors10 = [5, 6, 7, 8, 9];
    const divs = factors10.reduce((acc, x) => {
        if (acc && num % x === 0) return true;
        return false;
    }, true);
    return divs;
};

const divByUpTo10Itr = (num) => {
    const factors10 = [5, 6, 7, 8, 9];
    return factors10.every(x => num % x === 0);
}

const divByUpTo20 = (num) => {
    const factors20 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const divs = factors20.reduce((acc, x) => {
        if (acc && num % x === 0) return true;
        return false;
    }, true);
    return divs;
};

const divByUpTo20Itr = (num) => {
    const factors20 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return factors20.every(x => num % x === 0);
}

const recDivide = (num) => {
    if (divByUpTo10Itr(num)) return num;
    return recDivide(num + 1);
}

let state = false;
let num = 0;

//while (!state) {
//    num++;
//    state = divByUpTo20(num);
//}
//console.log(num);

//console.log(divByUpTo20Itr(232792560));

console.log(recDivide(1));
