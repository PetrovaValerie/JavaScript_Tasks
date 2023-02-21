// Task 1
// Вывод наибольшего числа
let height = 15;
let width = 20;

console.log(Math.max(height, width));

// Task 2
// перебор от 1 до 20, где выведутся все числа кратные трём
for ( let numb = 1; numb <= 20; numb++ ) {
    if ( numb % 3 === 0 )
        console.log(numb);
}

//Task 3
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5