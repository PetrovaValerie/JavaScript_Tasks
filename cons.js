//1 Какой результат работы выражения?
// console.log("" + 1 + 0 + "!")

//2 Что выведет данный код?
// let [,,last] = new Set([1,1,2,2,3])
// console.log(last)

//3 Что выведет данный код?
// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, 1000)
// }

//4 Что выведет данный код?
// var func = []
// for (var i = 0; i < 5; i++) {
//  func[i] = function() {
//      console.log(i)
//  }
// }
// func[3]()

//5 Что выведет данный код?
// (function() {
//     var a = b = 5;
// })();
// console.log(b)

//6 Что выведет данный код?
// function say(a) {
//     console.log(a);
// }
// say(1);
// setTimeout(say(2), 5000);
// setTimeout(function() {
//     say(3);
// }, 1000);
// setTimeout(say, 2000, 4)

// 7 Что выведет данный код?
// (function() {
//     console.log(1);
//     setTimeout(() => console.log(2), 1000)
//     setTimeout(() => console.log(3), 0);
//     Promise.resolve(true).then(() => console.log(4));
//     console.log(5)
// })();

//8 Что выведет данный код?
// var a = 1;
// function b() {
//     a = 10;
//     return;
//     function a() {
//     }
// }
// b();
// console.log(a)

//9 Что выведет данный код?
// function test() {
//     console.log(a)
//     console.log(foo());
//
//     var a = 1;
//     function foo() {
//         return 2
//     }
// }
// test ()