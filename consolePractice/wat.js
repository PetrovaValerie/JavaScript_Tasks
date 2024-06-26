//**************************WAT

// Task 1
const numbWAT1 = [] + [] === ""
console.log(numbWAT1) //true
//знак + говорит о строковой операции, а для строковой операции
//вызывается метод toString, кот приводит массив в пустую строку

// Task 2
const numbWAT2 = [] + {} === "[object Object]"
console.log(numbWAT2) //true
//знак + переводит объект в строку,
//поэтому на обоих строках вызывается метод toString

// Task 3
const numbWAT3 = {} + [] === 0
console.log(numbWAT3)
//пустые фигурные скобки трактуются как пустой блок кода, а не объект,
//поэтому их можно отбросить. Остаётся +[] приведение через
//унарный + массива в число. Пустой массив приводится к числу 0.

// Task 4
const numbWAT4 = {} + {} === "[object Object] [object Object]"
console.log(numbWAT4)
//Одни браузеры считают это сложением двух объектов
//в то время как другие опускают пустой блок кода,
//оставляя объект, переведённый в число унарным +, что даёт NaN

// Task 5

alert( '01' == 1 ); // true, строка '01' становится числом 1
alert( true == 1 ); // true
alert( false == 0 ); // true






























