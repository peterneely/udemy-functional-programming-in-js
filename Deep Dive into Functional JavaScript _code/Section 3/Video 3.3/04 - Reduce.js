

const reduce = ([head, ...tail], f, accumulator) =>
    typeof head === 'undefined' ?
        accumulator :
        reduce(tail, f, f(accumulator, head));

console.log(reduce([1, 2, 3, 4], (x, y) => x + y, 0));