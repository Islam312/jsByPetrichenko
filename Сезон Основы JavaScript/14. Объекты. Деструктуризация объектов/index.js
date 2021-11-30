'use strict';

//* эта конструкция старая
const obj = new Object();

//* literal notation
const options = {
  name: 'test',
  width: 1024,
  heigth: 1024,
  colors: {
    border: 'black',
    bg: 'red',
  },
};

// console.log('options.name =>>', options.name);

//* delete - удаление ключей объекта

// delete options.name;

//*перебор объекта через цикл for in

//* Получение всех ключейобъекта как массив данных
console.log(Object.keys(options));

//* Подсчет ключей объекта методом  Object.keys()
console.log(`Количество ключей ${Object.keys(options).length}`);

//* Собственный метод
options.showObj = function () {
  //* showObj  метод созданный для перебора объекта
  for (let key in options) {
    if (typeof options[key] == 'function') {
      console.log(`${key} это метод объекта options}`);
    } else if (typeof options[key] === 'object') {
      console.log(`/**Cвойство ${key} является объектом**/`);
      for (let iter2 in options[key]) {
        console.log(
          `       имеет свойство ${iter2} со значением ${options[key][iter2]}`
        );
      }
    } else {
      console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
  }
};

options.showObj();

//* ES6 ---> Дестуктуризация объекта
const { border, bg } = options.colors;
console.log('border =>>', border);
console.log('bg =>>', bg);
