const partial =
    (f, ...argList1) =>
        (...argList2) =>
            f(...argList1, ...argList2);

const curry1 = f => a => (...rest) => f(a, ...rest);
const curry2 = f => a => b => (...rest) => f(a, b, ...rest);

const curry = f => curryN(f, []);
const curryN =
    (f, acc) =>
        acc.length === f.length ?
            f(...acc) :
            arg => curryN(f, [...acc, arg]);

// Application sequence:
// curry( volume )
// curryN( volume, [] )
// a => curryN( volume, [a] )
// a => b => curryN( volume, [a, b] )
// a => b => c => curryN( volume, [a, b, c] )
// a => b => c => volume( a, b, c )


const volume = (a, b, c) => a * b * c;

console.log('partial', partial(volume, 2, 3)(4));
console.log('curry', curry(volume)(2)(3)(4));