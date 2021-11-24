//* Типы данных разделяются на две большие классы:
//*  1. Простые типы(примитивы)
//*  2. Объекты(комплексные)

//*   1.Простые(примитивы)
//* 1.1 Числа
//* 1.2 Строки
//* 1.3 Булевые значения
//* 1.4 null
//* 1.5 undefined
//* 1.6 Symbol
//* 1.7 Bigint

let number = 10;
let newStr = 'Islam';
let boolTrue = true;
let boolFalse = false;
let undefined = 'undefined';
let symbol, bigInt; //*?

//* 2. Объекты(комплексные)
//* 2.1 Специальные объекты
//* 2.1.1 Массивы
//* 2.1.2 Функции function
//* 2.1.3 Объект Даты
//* 2.1.4 Регулярные выражения
//* 2.1.5 Ошибки
//*2.2 Обычные объекты

const objPeople = {
  name: 'Djon',
  age: 23,
  isMarried: true,
};

//* два вида для обращения
//* console.log( objPeople.name ) - dot notation
//* console.log(objPeople["name"]) - одно и тоже

//* Спец объект
//* 2.1.1 Массивы - частный случай объекта
//* Каждый элемент массива имеет свой порядковый номер
//* Нумерация начинается с 0

const newArr = [1, 'firstName', 'id', 'element', 23, {}, []];
