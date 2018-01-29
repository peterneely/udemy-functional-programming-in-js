

const filter = ([head, ...tail], predicate) =>
    typeof head === 'undefined' ?
        [] :
        predicate(head) ?
            [head, ...filter(tail, predicate)] :
            filter(tail, predicate);

console.log(filter([1, 2, 3, 4, 5], x => x % 2 === 1));