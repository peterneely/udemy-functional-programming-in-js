

const map = ([head, ...tail], f) =>
    typeof head === 'undefined' ?
        [] :
        [f(head), ...map(tail, f)];

console.log(map([1, 2, 3, 4], x => x ** 2));