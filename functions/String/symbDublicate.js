//                     Задачи по JavaScript

// Task 1
// Ф-я создания набора дубликатов символов строки

// accum("abcd") // A-Bb-Ccc-Dddd
const accum = (string) =>
    string.toUpperCase()
        .split('')
        .map((el,i) => `${(el.repeat(i).toLowerCase())}`).join('-');



// accum("abcd") // A-Bb-Ccc-Dddd
//accum("cwAt") // C-Ww-Aaa-Tttt


// // Base
// function accum(string) {
//     let arr = string.toUpperCase().split('');
//     let repeatArr = arr.map(function(el, i) { // каждый эл-т массива нужно продублировать опр кол-вл раз, исп-я метод map
//         // в ф-ю передаём символ и индекс эл-та
//         // Что происх в ф-ии?
//         // 1.Мы исп получ символ
//         // 2.К этому символу приб его дубликаты, кот создаются с пом-ю repeat
//         //все эти дубликаты перевод в нижний регистр
//         return el += el.repeat(i).toLowerCase();
//     });
//     let resString = repeatArr.join('-');
//     return resString;
// }
//
// // Advanced
// function accum(string) {
//     return string.toUpperCase().split('').map(
//         function(el, i) {
//             return el += el.repeat(i).toLowerCase();
//         }
//     ).join('-');
// }
//
//
// //ES6
// const accum = (string) =>
//     string
//         .toUpperCase()
//         .split('')
//         .map((el,i) => `${(el.repeat(i).toLowerCase())}`).join('-');
// // внутри map логику конкатенации переписываем на шаблонную строку