'use strict';

//* Методы и свойства для строк
//* свойство length - длина строки или массива

// const str = 'test';

// console.log(str.length); //* 4

// //* методы изменения регистра
// //* .toUpperCase()
// const upRegistr = str.toUpperCase();
// console.log(upRegistr);

// //* .toLowerCase()
// const downRegistr = str.toLowerCase();
// console.log(downRegistr);
// console.log('str =>>', str);

// //* Поиск подстроки
// //* .indexOf()
// const fruit = 'someFrufruifruit';
// console.log(fruit.indexOf('r '));

// //* .slice()    //* разрезать
// const logg = 'hi man';
// console.log(logg.slice(3, 5)); //* ma

// //* Такой же аналог .slice() это .substring()

// //*  .substr() похожна предыдущие методы за исключением того что 2 аргументом мы можем задать количество букв сколько нужно разрезать

// const lastName = 'Petrichenko';
// console.log(lastName.substr(2, 3)); //* tri

// //* Методы и свойства для чисел

// //* мини библеотека Math.

// Math.PI  //*3.1415...

//*Округление чисел

let num = 21.22;
console.log(Math.round(num));

//* Перевод в 10ную систему исчисления

let testNum = "12.23px"
console.log(parseFloat(testNum))