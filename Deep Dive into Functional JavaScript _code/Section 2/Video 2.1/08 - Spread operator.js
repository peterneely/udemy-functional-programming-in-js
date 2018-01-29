const [, ...tail] = [1, 2, 3];

console.log([...tail, ...tail]); // [2, 3, 2, 3]
console.log([...tail, ...tail, 4]); // [2, 3, 2, 3, 4]

let logArgs = (a, b, c) => console.log(a, b, c);

logArgs(...tail, ...tail); // 2, 3, 2
// returns undefined

let logHeadTail = (head, ...tail) => console.log(head, tail);

logHeadTail(...tail, ...tail); // 2, [3, 2, 3]
// returns undefined
