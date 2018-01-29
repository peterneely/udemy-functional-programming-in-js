let target = { className: 'js-container' };
let source = { tagName: 'div' };

let combinedObject = Object.assign(target, source);

// target is mutated
console.log(combinedObject, target, source);



let target2 = { className: 'js-container' };
let source2 = { tagName: 'div' };

let combinedObject2 = Object.assign(target, source);

// target2 is not mutated
console.log(combinedObject2, target2, source2);