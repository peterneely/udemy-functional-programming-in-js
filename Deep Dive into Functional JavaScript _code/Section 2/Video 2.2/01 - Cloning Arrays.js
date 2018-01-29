const cloneArray = arr => [...arr];

const originalArray = ['hi', { on: true }];

const newArray = cloneArray(originalArray);

newArray[0] = 'hello';

newArray[1].on = 'false';

console.log('originalArray:', originalArray);
console.log('newArray:', newArray);