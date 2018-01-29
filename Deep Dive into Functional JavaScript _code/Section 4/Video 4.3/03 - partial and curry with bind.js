const partial = (f, ...args) => f.bind(null, ...args);

const curry =
    f =>
        a =>
            f.length === 1 ? f(a) : curry(partial(f, a));

console.log(curry((a, b, c) => a * b * c)(2)(3)(4));