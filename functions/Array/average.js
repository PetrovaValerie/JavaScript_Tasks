// Найти среднее арифметическое эл-тов массива (сумма элементов, делить на количество)

const getAverage = (numbers) => {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    const length = numbers.length;
    return sum / length;
};

const numbers = [1, 2, 3, 4];
console.log(getAverage(numbers));





// reduce - исп для вычисления единого значения на основе всего массива

// let value = arr.reduce(function(accumulator, item, index, array) {
//     // ...
// }, [initial]);

// accumulator – результат предыдущего вызова этой функции,
//               равен initial при первом вызове (если передан initial);
// item – очередной элемент массива;
// index – его позиция;
// array – сам массив.