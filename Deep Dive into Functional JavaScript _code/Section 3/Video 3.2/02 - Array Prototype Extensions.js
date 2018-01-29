const arr1 = [1, 2, 3];
const arr2 = [4, 5];

console.log('arr1.concat( arr2 )', arr1.concat(arr2));

console.log(
    'arr1.concat( arr2 ).every( x => x % 2 === 1 )',
    arr1.concat(arr2).every(x => x % 2 === 1)
);

console.log(
    'arr1.concat( arr2 ).some( x => x % 2 === 1 )',
    arr1.concat(arr2).some(x => x % 2 === 1)
);

console.log(
    'arr1.concat( arr2 ).find( x => x % 2 === 1 )',
    arr1.concat(arr2).find(x => x % 2 === 1)
);

console.log(
    "arr1.concat( arr2 ).join( ',' )",
    arr1.concat(arr2).join(',')
);

console.log(
    "arr1.concat( arr2 ).join( ',' ).split( ',' )",
    arr1.concat(arr2).join(',').split(',')
);

console.log(
    "arr1.concat( arr2 ).join( ',' ).split( ',' ).reverse()",
    arr1.concat(arr2).join(',').split(',').reverse()
);