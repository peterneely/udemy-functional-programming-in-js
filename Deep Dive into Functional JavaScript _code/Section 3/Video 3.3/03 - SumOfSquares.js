
const square = x => x ** 2;

const sum = (x, y) => x + y;

console.log([1, 2, 3, 4].map(square).reduce(sum, 0));