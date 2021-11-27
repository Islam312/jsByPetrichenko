'use strict';

//* function declaration

// function calc(num1, num2, symbol) {
//   switch (symbol) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;
//     case '*':
//       return num1 * num2;
//     case '/':
//       if (num2 > 0) {
//         return num1 / num2;
//       } else {
//         return 'На ноль нельзя делить!';
//       }
//   }
// }
// console.log(calc(1, 9, '/'));

//* function expression

// const calc = function (a, b) {
//   return a + b;
// };

// console.log('calc =>>', calc(1.2, 2.4));

//* arrow function

const calc = (a, b) => {
  return a + b;
};

console.log('calc(23.3,6.7) =>>', calc(23.3, 6.7));
