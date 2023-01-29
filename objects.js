//**************************OBJECTS
// Methods:
// Obj.assign() --- Shallow copy
// JSON.parse() / JSON.stringify() --- Deep copy
// Obj.create()
// Obj.entries()
// Obj.keys()
// Obj.values()
// Obj.freeze()
// seal()
// getPrototypeOf()

// Task 1
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
//
//     Создайте пустой объект user.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Task 2
// Создать обьект с 2 ключ - значением --> удалить 1 ключ
const locker = {
    number: 28,
    color: "black",
}
console.log(locker);
delete locker.color;
console.log(locker);

// Task 3
// Создать обьект с 2 ключ - значением -->
// проверить есть ли в обьекте опр ключ --> есть -->  в консоль true
const footballTeam = {
    city: "Chicago",
    players: 10,
}
if (footballTeam.players) {
// if (`players` in footballTeam) {
    console.log(true);
} else {
    console.log(`there's no such key`)
}

// Task 4
// C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей обьекта
const student = {
    name: 'Valerie',
    age: 19,
    isHappy: true
}
for (let key in student) {
    console.log(key);
    console.log(student[key])
}

// Task 5
// Дан объект, вывести в консоль слово красный и синий
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

// Task 6
// Вычислить среднюю зп сотрудников, результат -->  в переменную
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    nikola: 664,
    alexandra: 199
}

let averageSal = 0;
for (let name in salaries) {
    averageSal += (Number(salaries[name]) /(Object.keys(salaries).length));
}
console.log(averageSal.toFixed(1));

// Task 7
// Даны два одинаковых обьекта. Сравните их так чтобы они были равны
let student1 = {
    name: 'Polina',
    age: 27,
};
let student2 = {
    name: 'Polina',
    age: 27,
};
if ( JSON.stringify(student1) === JSON.stringify(student2) ) {
    console.log(`Объекты равны`)
} else {
    console.log(`Объекты не равны`)
}

// Task 8
// Дан обьект с животными. Надо узнать имя птицы и вывести его в консоль.
// Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим ОШИБКУ.
// Задача придумать как обратиться к несуществующему обьекту и не получить ошибку, чтобы программа работала.
const animals = {
    cat: {
        name: 'Енчик',
        age: 3,
    },
    dog: {
        name: 'Орео',
        age: 2,
    }
}

animals.bird = {
    name: 'Сойка',
    age: 1,
}
console.log(animals);

if ("bird" in animals) {
    console.log(animals[`bird`].name);
} else {
    `Ошибка`
}

// Task 9
// Ф-я, которая умножает все числовые свойства объекта obj на 2
// Напрямую изменить объект
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

// Task 10
// Напишите функцию isEmpty(obj), которая возвращает true,
// если у объекта нет свойств, иначе false --> схема
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

//  --> решение
function isEmpty(obj) {
    for (let key in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
    }
    return true;
}
