const map =
    f =>
        ([head, ...tail]) =>
            typeof head === 'undefined' ?
                [] :
                [f(head), ...map(f)(tail)];

console.log(map(a => 2 * a)([1, 2, 3]));