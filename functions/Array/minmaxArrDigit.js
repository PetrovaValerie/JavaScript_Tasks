//                     Задачи по JavaScript

// Task 1
// Ф-я поиска min и max знач-й в массиве

const minMax = (arr) =>
    [Math.min(...arr), Math.max(...arr)];

console.log(minMax([1,2,3,4,5]))




















// minmax([2,9,10,25,47,4,1]); [7,47]
// minmax([2,1]); [1,2]
// minmax([1]);	[1,1]

//
// // Base
// function minMax(arr) {
//     let res = []; //создадим пустой массив
//     // для этого восп-ся объектом и его методами min и max
//     // нюанс метода-они приним несколько знач-й и возвращ либо мин либо макс
//     // НО с массивами они не работают
//
//     // поэтому для того, чтобы прим эти методы к массиву
//     // нужно воспользоваться привязкой контекста
//     // Использ метод apply, кот привязывает контекст
//     // и передаём аргументы в функцию в виде массива
//     let minValue = Math.min.apply(null, arr);
//     let maxValue = Math.max.apply(null, arr);
//     return res.push(minValue, maxValue);
//     // результат выполнения двух методово присваиваем в переменные minValue и maxValue
//     // последним шагом оба эти знач-я запушим в один массив и вернём результат
// }
//
// // Advanced
// function minMax(arr) {
//     return [Math.min.apply(null, arr), Math.max.apply(null, arr)];
// }
//
//
// //ES6
// const minMax = (arr) =>
//     [Math.min(...arr), Math.max(...arr)];
// // деструктуризация и распылить значение массива в метод


// Task 2 just max
// console.log(foo([5,2,7]));  // 7
// function foo(arr){
//     return Math.max(...arr);
// }

// Task 3 just min
// console.log(foo([5,2,7]));  // 2
//
// function foo(arr){
//     return Math.min(...arr);
// }