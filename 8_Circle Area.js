function solve(input) {
    'use strict';
    const typeOfParameter = typeof input;

    if(typeOfParameter === 'number') {
        const area = input ** 2 * Math.PI;
        console.log(area.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we received a ${typeOfParameter}.`);
    }
}

solve(4)