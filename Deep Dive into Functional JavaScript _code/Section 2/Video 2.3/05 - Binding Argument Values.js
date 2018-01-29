const add = (a, b) => {
    console.log(a, b);
    return a + b;
};

const addToFive = add.bind(null, 5);

console.log(addToFive(2));