//* Условия
//* Каждое действие обусловлено условиями
//* if(condition){
//* code
//*}

//*Например:
const obj = {
  name: 'Islam',
  isAdmin: true,
};

//*Обычный способ создания условий
// if (obj.isAdmin === true) {
//   console.log(`${obj.name} is admin`);
// } else {
//   console.log(`${obj.name} is not admin`);
// }
//* Тернарный способ создания условий(короткий)
// (obj.isAdmin === true)?console.log(`${obj.name} is admin!`):console.log(`${obj.name} is not admin!`)

//* Конструкция switch(){}
switch (obj.isAdmin) {
  case true:
    console.log('You are admin!');
    break;
  case false:
    console.log('You are not admin!');
    break;
}
