// 덧셈, 뺄셈, 곱셈, 나눗셈
const add = (a, b) => a+b;
const subtract = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b) => a/b;

/* modele export 방법 - 1 */
// module.exports.add = add;
// module.exports.subtract = subtract;
// module.exports.multiply = multiply;
// module.exports.divide = divide;

/* modele export 방법 - 2 */
module.exports = {
    add : add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
}