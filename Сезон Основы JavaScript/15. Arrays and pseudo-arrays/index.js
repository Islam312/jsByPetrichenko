'use strict';

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr);

//* Методы массивов
//*.push()  - добавить на конец массива

// arr.push('islam', 'hi', 'hello');

// console.log(arr);

//*.pop() - удалить с конца массива

// arr.pop();
// console.log(arr);

//* Эти методы редко используются связи с тем что изменяют индекса каждого элемента
//*.shift()
//*.unshift()

//* перебор массива осуществляетсянесколкими условиями
//* 1. for()

// for (let i = 0; i < arr.length; i++) {
// console.log(arr[i]);
// }

//* 2. for(of)

// for (let i of arr) {
//   console.log(i);
// }

//* 3. .forEach(()=>{}) - перебор массива с callback функцией //==// При испльзовании forEach массив не модифицируется
// arr.forEach((item, index, arr) => {
//* callback функция имеет 3 аргумента
// console.log(`${index}: ${item}`);
//* первый аргумет item это значение элемента
//* второй аргумент index порядковый номер в массиве
//* третий аргумент  arr этот тот самый массив который перебирается
// });

//* 4. .map(()=>{}) - тоже что и forEach() но при использовании map() он возвращает новый массив
// const newMapArr = arr.map((item) => {
//   return item * 2;
// });
// console.log(newMapArr); //*[ 2,  4,  6,  8, 10, 12, 14, 16, 18 ]
// console.log(arr); //*[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//* 5. filter(()=>{}) - перебирает фильтрует по нашим условиям вовращает новый массив
// const newFilterArr = arr.filter((item) => {
//   return item % 2 !== 0;
// });
// console.log(newFilterArr);
// console.log(arr);

//*str.split() - можно использовать как для создания массива через prompt
//   const str = prompt("")
//   const product = str.split(", ")

// console.log("Products : ", product)

//*str.join() - Из массива в строку разделенной указанным символом
// const str = arr.join(', ');
// console.log(str)
//* метод .sort() это сортировка массива методом быстрой сортировки

const arr = [122, 22, 3, 41, 51, 6, 7, 8, 9];

arr.sort(compareNum);

console.log(arr);
//* без этой функции не работает метод .sort()
function compareNum(a, b) {
  return a - b;
}
