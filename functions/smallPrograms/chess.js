//                     Задачи по JavaScript

// Task 1
// Нарисовать шахматную доску крестиками на js

// 1 var
// function chessBoard() {
//     const limit = 8;
//     let result = '';
//     for (let i = 0; i < limit; i++) {
//         for (let j = 0; j < limit; j++) {
//             if (i % 2 !==0) {
//                 result += j % 2 === 0 ? '  ' : 'X'
//             } else {
//                 result += j % 2 === 0 ? 'X' : '  '
//             }
//         }
//         result += '\n'
//     }
//     return result
// }
//
// console.log(chessBoard())

// 2 var
// Через создание массива опр длины и его заполнение

function chessBoard() {

    const limit = 8;
    return Array.from(Array(limit).keys())
        .reduce((acc,  _, index) => {
            let result = '';
                if (index % 2 !==0) {
                    result += '  X'.repeat(limit / 2)
                } else {
                    result += 'X  '.repeat(limit / 2)
                }
                return acc + result + '\n'
        }, '')
}

console.log(chessBoard())


// С пом-ю ES6 создаю массив опр длины и его заполняю
// 1. Обращаясь к классу Array
// 2. с пом-ю метода from из объекта Array iterator с указанием длины массива limit = Array(limit)
// 3. Вызову метод keys,

// 4. с пом-ю Array. ... получ объект Array iterator
// 5. и с пом-ю метода from мы получ заполненый массив от 0 до 7

//6. Воспользуясь методом ES6 reduce, склею строки