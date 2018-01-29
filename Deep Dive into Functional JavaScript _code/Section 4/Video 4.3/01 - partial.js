

const partial =
    (f, ...argList1) =>
        (...argList2) =>
            f(...argList1, ...argList2);

const volume = (a, b, c) => a * b * c;

console.log(partial(volume, 2, 3)(4));

console.log(partial(volume, 2)(3, 4));

console.log(partial(partial(volume, 2), 3)(4));