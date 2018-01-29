const [head, ...tail] = [1, 2, 3];

console.log(head, tail);

let right = {
    first: 'Zsolt',
    last: 'Nagy',
    languages: ['JavaScript', 'Java', 'Prolog']
};

const { first, languages: [, ...langTail] } = right;

console.log(first, langTail);

const arr = [1, 2, 3];
const getTail = ([, ...tail]) => tail;

console.log(getTail(arr));