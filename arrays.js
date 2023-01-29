//**************************ARRAYS
// Methods:
// push / pop
// shift / unshift
// splice
// slice
// concat
// forEach
// indexOf / lastIndexOf / includes
// find / findIndex
// filter
// map
// sort
// reverse
// split / join
// reduce / reduceRight
// Array/isArray


// Task 1
//Выведите в консоль последний эл-т массива
const animals = ['monkey', 'dog', 'cat'];
console.log(animals.slice(-1));

// Task 2
// Удалите все элементы в массиве  --> result в консоль
// 1var
const numbers = [5, 43, 63, 23, 90];
console.log(numbers.splice(0, 5));
console.log(numbers);
// 2 var
const numbers = [5, 43, 63, 23, 90];
for (let i = 0; i < 5; i++){
    const delNumb = numbers.pop();
}
console.log(numbers);

// Task 3
// Удалите последний эл-т массива, затем вместо него добавьте в массив студента Borya.
// Удалите первый эл-т массива, затем вместо него добавьте в массив студента Andrey  --> result в консоль
const students = ['Polina', 'Dasha', 'Masha'];

console.log(students.pop());
console.log(students.push(`Borya`));
console.log(students);

console.log(students.shift());
console.log(students.unshift(`Andrey`));
console.log(students);

// Task 4
// Выведите в консоль все элементы массива. Сначала через цикл for, затем for of
// 1 var (for)
const cats = ['Gachito', 'Tom', 'Batman'];

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}
// 2 var (for of)
for (let catsNickname of cats) {
    console.log(catsNickname);
}

// Task 5
// Соед два массива чисел в один.
// В полученном массиве найти индекс числа 8
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const allNumbers = [...evenNumbers, ...oddNumbers]
                    .sort((a,b) => a-b);

console.log(allNumbers.indexOf(8));

// Task 6
// Наш бинарный массив неполный, в нем явно не хватает единиц.
// Превратите данный массив в строку.
const binary = [0, 0, 0, 0];
console.log(binary.join(`1`));

// Task 7
// Выведите в консоль среднее значение чисел в многомерном массиве

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];

const flattenedArray = matrix.flat();

console.log(flattenedArray.reduce((acc,val) => acc + val, ) / flattenedArray.length);

// Task 8
// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные
// Оба массива  --> в консоль

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]

const positiveNumbers = mixedNumbers.filter(val => val >= 0);
const negativeNumbers = mixedNumbers.filter(val => val < 0);

console.log(positiveNumbers);
console.log(negativeNumbers);

// Task 9
// Создать массив длинной не менее 5, из динамически созданных случайных чисел
//   --> написать алгоритм который берет все числа из исходного массива
//   --> возводит их в куб  --> записывает в новый массив  --> result в консоль

function generateRandomArr(len) {
    const {random, floor} = Math;
    const randomArr =[];
    for (let i = 0; i < len; i++) {
        randomArr.push(floor(random() * 10) + 1);
    }
    return randomArr;
}

function returnQubedArr(arr) {
    return arr.map(val => val ** 3);
}

const randomNumbers = generateRandomArr(10),
    randomPoweredNumbers = returnQubedArr(randomNumbers);

console.log(randomNumbers);
console.log(randomPoweredNumbers);

// Task 10
// Отсортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);
alert( arr );