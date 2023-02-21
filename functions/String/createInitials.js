//                     Задачи по JavaScript

// Task 1
// Ф-я создания инициалов

const toInitials = name =>
    name.split(' ')
        .map(el => `$(el.slice(0, 1).toUpperCase()}.)`)
        .join('');


// // toInitials ('Bill Gates') 'B.G.'
// // toInitials ('elon mask') 'E.M.'
// // даже если написаны с маленькой буквы, инициалы должны быть с большой
//
// // Base
// function toInitials(name) {
//     let arrName = name.split(' '); // разбиваем строку на массив по словам
//     let firstLetterArr = nameArr.map(function(el) { //с пом-ю map получаем новый массив
//         return el.slice(0, 1).toUpperCase() + '.'; //отрезая от каждого слова первую букву
//     }); //теперь массив firstLetterArr содержит массив заглавных букв каждого слова с точкой на конце
//     let initials = firstLettersArr.join(''); //превращаем в строку
//     return initials; // возвращаем
// }
//
// // Advanced
// function toInitials(name) {
//     return name
//         .split(' ')
//         .map(function(el) {
//             return el.slice(0, 1).toUpperCase() + '.';
//         })
//         .join('');
// } 		// логика как  выше, только теперь мы исп цепочку методов,
// // опуская создание промежуточных переменных
//
// //ES6
// const toInitials = name =>
//     name
//         .split(' ')
//         .map(el => `$(el.slice(0, 1).toUpperCase()}.)`)
//         .join('');
//
// // в новом синтаксисе вместо конкатенации строк исп template String