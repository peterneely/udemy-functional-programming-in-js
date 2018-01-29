const arr = [1, 2, 3, 4];
const [head, ...tail] = arr;
console.log('head, tail: ', head, tail);

const append = ([head1, ...tail1], array2) =>
    typeof head1 === 'undefined' ?
        array2 :
        [head1, ...append(tail1, array2)];

console.log('append( [1, 2, 3], [4, 5] ):', append([1, 2, 3], [4, 5]));