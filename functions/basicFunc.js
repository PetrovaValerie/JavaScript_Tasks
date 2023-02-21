//**************************FUNCTIONS
// Types:
// Declaration / Expression
// Arrow f
// Generator f
// Constructor f
// Named & Anonymous
// IIF - Immediately Invoked Function Expression

// HOISTING
// Hoisting (Всплытие в зав-ти от типа ф-ии)
// Function Expression & Function Declaration

console.log(square(25))
// Function Declaration(Объявление ф-ии)  // ANS 625
function square(num) {
    return num ** 2
}
// Function Expression(Функц-е выражение) // ANS Error
const square = function(num) {
    return num ** 2
}

// Task 1
// Ф-я опр сумму чисел от 0 до параметра, который мы в неё передаем.
// Если передадим число 100 то, вычислит сумму чисел от 0 до 100 (должно получится 5050)

function getSum(x) {
    let sum = 0;
    for  (let n = 1; n <= x; n++) {
        sum += n;
    }
    console.log(sum);
    return sum;
};
getSum(100);

// Task 2
// Ф-я принимает число и вычислять сумму цифр из которых состоит
// Для 2021 это будет 5

function getSumNumbers(n) {
    let sumNumb = 0;
    let j = String(n);
    for (i = 0; i < j.length; i++) {
        sumNumb += Number( j[i] );
    }
    // console.log(sumNumb);
    return sumNumb;
}
getSumNumbers(10204);



