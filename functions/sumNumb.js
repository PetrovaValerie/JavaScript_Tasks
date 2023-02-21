//                     Задачи по JavaScript

// Task 1
// Ф-я суммирования всех цифр числа

const sumDigits = number =>
    Math.abs(number)
        .toString()
        .split('')
        .reduce((sum, cur) => +sum + +cur, 0);





// // sumDigits(99) '18'
// // sumDigits(-32) '5'
//
// // Base
// function sumDigits(number) {
//     let moduleNumber = Math.abs(number); // Убираем зависимость от отрицательных чисел.Данный метод позв брать число по модулю, в рез-те оно всегда будет положительным
//     let str = moduleNumber.toString(); // преобр в строку, чтобы её можно было разбить на массив
//     let arr = str.split('');
//     let res = arr.reduce(function(sum, cur) { //суммируем все элементы массива
//         return Number(sum) + Number(cur); // поскольку эл-ты массива это числа, тип которых строка => тип преобразуем в число
//     }, 0);
//     return res;
// }
//
// // Advanced
// function sumDigits(number) {
//     return Math.abs(number)
//         .toString()
//         .split('')
//         .reduce(function(sum,cur) { return +sum + +cur }, 0);
// } // оптимизируем код,убирая промежуточные переменные и
// // заменяем number на +
//
//
// //ES6
// const sumDigits = number =>
//     Math.abs(number)
//         .toString()
//         .split('')
//         .reduce((sum, cur) => +sum + +cur, 0);
// // заменяем на стрелочную ф-ю