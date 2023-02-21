//                     Задачи по JavaScript

// Task 1
// Ф-я поиска самого короткого слова

const findShort = string =>
    string.split(' ')
        .sort((a, b) => a.length - b.length)[0];



// // findSHort('The smallest word in sentence') 'in'
// //findShort('Just test string') 'Just'
//
// // Base
// function findShort(string) { //принимает строку
//     let wordsArr = string.split(' '); // преобразует в массив.Разбивает получ предложение по словам, а не по символам
//     let sortedWordsArr = wordsArr.sort(function(a, b) { // получ массив сортируем по возрастанию
//         return a.length - b.length; // за основу берём длину каждого слова в предложении
//     });
//     return sortedWordsArr[0]; // возвращаем первый эл-т отсортированного массива
// }
//
//
//
// // Advanced
// function findShort(string) {
//     return string
//         .split(' ')
//         .sort(function(a, b) { return a.length - b.length; })[0];
// }
//
// //ES6
// const findShort = string =>
//     string.split(' ')
//         .sort((a, b) => a.length - b.length)[0];