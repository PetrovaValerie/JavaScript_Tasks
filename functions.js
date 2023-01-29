//**************************FUNCTIONS
// Types:
// Declarations / Expression
// Arrow f
// Generator f
// Constructor f
// Named & Anonymous
// IIF - Immediately Invoked Function Expression

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

// Task 3
// Ф-я принимает в качестве аргумента три параметра:
// булевое значение
// функцию foo которая выводит в консоль свое имя
// функцию boo которая выводит в консоль свое имя
// --> если переданное булевое значение true запускаем функцию foo иначе boo

function weirdName(valid, foo, boo) {
    if (valid === true) foo()
    else boo();
}
function foo() {
    console.log("foo")
}
function boo() {
    console.log("boo")
}
weirdName(true, foo, boo);

// Task 4
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

// Task 5
// Палиндром- слово которое слева направо и справа налево пишется одинаково. Например "топот"
// Ф-я проверяет, явл-ся ли слово палиндромом (ES6)

function isPalindrome(str) {
    return str.toLowerCase() === str.split('').reverse().join('');
}

console.log(isPalindrome('топот'));

// Task 6
// Ф-я поиска самого короткого слова
const findShort = string =>
    string.split(' ')
        .sort((a, b) => a.length - b.length)[0];

// Task 7
// Ф-я создания инициалов
const toInitials = name =>
    name.split(' ')
        .map(el => `$(el.slice(0, 1).toUpperCase()}.)`)
        .join('');

// Task 8
// Ф-я суммирования всех цифр числа
const sumDigits = number =>
    Math.abs(number)
        .toString()
        .split('')
        .reduce((sum, cur) => +sum + +cur, 0);

// Task 9
// Ф-я поиска min и max знач-й в массиве
const minMax = (arr) =>
    [Math.min(...arr), Math.max(...arr)];

// Task 10
// Ф-я создания набора дубликатов символов строки
// accum("abcd") // A-Bb-Ccc-Dddd
const accum = (string) =>
    string.toUpperCase()
        .split('')
        .map((el,i) => `${(el.repeat(i).toLowerCase())}`).join('-');