"use strict";

const objFirst = {
    count: 500,
    first: 300,
    manyObj: {
        obj:1,
        obj:2,
        obj:3
    },
    manyOtherOption: true
};

const firstArr = [];
firstArr[0] = prompt('Ответ на впрос');
firstArr[1] = alert('Верни ответ');
firstArr[2] = confirm('Да или нет');

const userName = prompt('Введите свое имя');
const answerName = alert(`Привет ${userName}`);

// logical operation

const meatProduct = true;
const brokkolliProduct  = true;

console.log(meatProduct && brokkolliProduct);
console.log(meatProduct || brokkolliProduct);
console.log(!meatProduct && !brokkolliProduct);