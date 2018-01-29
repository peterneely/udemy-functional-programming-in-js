console.log(typeof function () { });

const addOne = num => num + 1;

console.log(addOne(5));

const addCallback = (num1, num2) => num1 + num2;
const add = (...num) => num.reduce(addCallback, 0);

console.log(add(1, 2, 3, 4, 5));