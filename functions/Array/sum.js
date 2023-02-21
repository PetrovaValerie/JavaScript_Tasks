//                     Задачи по JavaScript

// Task 1
// Ф-я, кот принимает массив чисел.
// вернёт сумму всех чисел массива

// 1 var
// let newArr = [1, 2, 3]
// function sumNumb(newArr) {
//     const sum = newArr.reduce((acc, number) => acc + number, 0);
//     return sum;
// }
// console.log(sumNumb(newArr))

// 2 var
console.log(getSum([1, 2, 3, 4]))

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+= arr[i]
    }
    return sum
}