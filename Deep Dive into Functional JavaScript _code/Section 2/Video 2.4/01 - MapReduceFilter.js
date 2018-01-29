console.log(
    ['Functional', 'programming', 'is', 'cool']
        .map(word => word.length)        // [10, 11, 2, 4]
        .filter(num => num % 2 === 0)    // [10, 2, 4]
        .reduce((a, b) => a + b, 0)      // 16
);