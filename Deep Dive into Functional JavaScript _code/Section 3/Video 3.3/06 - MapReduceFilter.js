const square = x => x ** 2;

const sum = (x, y) => x + y;

const twoOrHigher = x => x >= 2;

console.log([1, 2, 3, 4].map(square).filter(twoOrHigher).reduce(sum, 0));