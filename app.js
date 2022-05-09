const cal = require("./cal");
const func = require("./func");
const func2 = require("./func2");

let a = 5;
let b = 3;

console.log('======= cal.js =======');
console.log(cal.add(a, b));
console.log(cal.subtract(a, b));
console.log(cal.multiply(a, b));
console.log(cal.divide(a, b));

console.log('======= func.js =======');
console.log(func);
console.log('func.js module을 반복문 처리');
for (let i=0; i<5; i++) {
    console.log(func);
    // func module를 export하고 사라짐
}

console.log('======= func2.js =======');
for (let i=0; i<5; i++) {
    console.log(func2());
}
console.log('func2.js module을 반복문 끝');
console.log(func2());
// $ node app