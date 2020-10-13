// const findBestEmployee = function (employees) {
//     'use strict';
   
//     let keys = Object.keys(employees);
//     // console.log(keys.length);
//     let max = Math.max(...Object.values(employees));

//     for (const key of keys ) {
//       let value = employees[key];
//       let values = 0;
      
//       if (value === max){
//         values = value;
//         return key;  
//       } if ( keys.length === 0 ) {
//         let message = ' ';
//         return message;
//       }          
// } 
  
const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  let bestEmployee = '';
  const keys = Object.keys(employees);
   
  const max = Math.max(...Object.values(employees));
    for (const key of keys ) {
      let value = employees[key];
      if (value === max){
        bestEmployee = key; 
      }    
} 
  return bestEmployee;  
};


  // Объекты и ожидаемый результат
  const dev = {};
  console.log(findBestEmployee(dev)); 
  const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }; 
  console.log(findBestEmployee(developers)); 
  // 'lorence'
  
  const supports = {
    poly: 12,
    mango: 17,
    ajax: 4,
  }; 
  console.log(findBestEmployee(supports)); 
  // 'mango'
  
  const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }
  console.log(findBestEmployee(sellers)); 
  // 'lux' 



// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), 
// которая принимает объект сотрудников 
// и возвращает имя самого продуктивного (который выполнил больше всех задач). 
// Сотрудники и кол-во выполненных задач содержатся 
// как свойства объекта в формате "имя":"кол-во задач".