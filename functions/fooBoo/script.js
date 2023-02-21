//                     Задачи по JavaScript

// Task 1
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