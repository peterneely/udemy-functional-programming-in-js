
const sequence = (f1, f2) =>
    (...args) =>
        f2(f1(...args));

const f1 = (a, b) => a + b;
const f2 = a => `Result: ${a}`;

console.log(f2(f1(2, 5)));

console.log(sequence(f1, f2)(2, 5));