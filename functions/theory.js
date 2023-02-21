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





