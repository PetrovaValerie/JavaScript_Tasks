//                     Задачи по JavaScript

// Task 1

// Ф-я опр сумму чисел от 0 до параметра, который мы в неё передаем.
// Если передадим число 100 то, вычислит сумму чисел от 0 до 100 (должно получится 5050)

function getSum(x) {
    let sum = 0;
    for  (let n = 1; n <= x; n++) {
        sum += n;
    }
    return sum;
}
console.log(getSum(100));

// Task 2
// Пользователь вводит натуральное число. Нужно вывести на экран сумму цифр этого числа
// Ф-я принимает число и вычислять сумму цифр из которых состоит
// Для 2021 это будет 5

function getSumNumbers(n) {
    let sumNumb = 0;
    let j = String(n);
    for (let i = 0; i < j.length; i++) {
        sumNumb += Number(j[i]);
    }
    return sumNumb;
}
console.log(getSumNumbers(10204));

