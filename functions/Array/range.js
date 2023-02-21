//                     Задачи по JavaScript

// Task 1
// Ф-я принимает параметр n
// Результатом работы ф-ии явл-ся массив из N элементов со значениями 1, 2, 3...n

function countTill(n) {
    let result = [];
    for (let i = 1; i <= n; i++)
        result.push(i);
    return result;
}
console.log(countTill(7));

// Task 2
// Ф-я принимает 2 аргумента (начало-, -конец диапазона)
// вернёт массив из всех чисел диапазона, включая эти числа

// let newArr = [];
// //чобы массив работал для 2-ух функций,глобально объявила
// let range = function(a, b) {
//     // let newArr = [];
//     for (; a <= b; a++)
//         newArr.push(a);
//     return newArr
// }
// console.log(range(1, 3));
//
// // затем ф-ю sum, принимающую массив этих чисел и возвр их сумму
// let sumArrDigits = function(newArr) {
//     let sum = 0;
//     for (let i = 0; i < newArr.length; i++) {
//         sum += newArr[i]
//     }
//     console.log(sum)
// }
// sumArrDigits(newArr)

