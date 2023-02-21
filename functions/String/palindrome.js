//                     Задачи по JavaScript

// Task 1
// Палиндром- слово которое слева направо и справа налево пишется одинаково. Например "топот"
// Ф-я проверяет, явл-ся ли слово палиндромом (ES6)
// Итог:
function isPalindrome(str) {
    return str.toLowerCase() === str.split('').reverse().join('');
}

console.log(isPalindrome('топот'));




// function isPalindrome(string) {
//     let arr = string.split('');			//разбиваем строку посимвольно на массив
//     let reverseArr = arr.reverse();			//развернём массив
//     let resString = reverseArr.join('');			//полученный обратный массив мы опять склеиваем с помощью join
//     let res = string === resString;			//сравниваем передаваемое в функцию слово и наше перевёрнутое
//     return res;				//вернём результат
// }
//
// // Advanced
// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }
//
// //ES6
// const isPalindrome = str =>
//     str === str.split('').reverse().join('');