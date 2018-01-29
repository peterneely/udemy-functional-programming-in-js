const filter = (array, filterFunction) => {

    const reducer = (accumulator, element) =>
        filterFunction(element) ?
            [...accumulator, element] :
            accumulator;

    return array.reduce(reducer, []);
}

console.log(filter([1, 2, 3, 4, 5], x => x < 4));