'use strict';

//* Функция Высшего порядка - это функция сожержать функцию в качестве аргумента или возвращать функцию
//*  Callback функции  - это функции которые передаются как аргумент другой функции

//* callback функция c обработчиком событий
// let el;
// el.addEventListener('click', () => {
//   //* ...code...
// });
//* Функция в функции

function showMsg(name, status, callback) {
  if (callback && typeof callback === 'function') {
    callback();
  } else {
    console.log(`Hello ${name}, your status is ${status}`);
  }
}

// function callback() {
//   console.log(`Message not supported`);
// }
// showMsg('Islam', 'User', callback);

//* или же способом записывание в аргументе

showMsg('Islam', 'Admin', () => {
  console.log('Message is not supported!');
});
