//                     Задачи по JavaScript

// Task 1

// Ф-я isUpperCase(str, character) опр в каком регистре символ строки в указанной позиции
// верхний - true, нижний - false

function isUpperCase(str, index) {
    return str.charAt(index).toUpperCase() === str.charAt(index);
}

console.log(isUpperCase('tasks JavaScript', 7));