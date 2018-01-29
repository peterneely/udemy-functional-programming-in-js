// fries is not editable
let fridge = { fries: 1 };

// changing the fries property will succeed
fridge.fries = 2;
console.log('fridge.fries', fridge.fries); // changes to 2

// let's freeze the fridge. This means
// - you cannot add or remove properties
// - you cannot change existing property values
Object.freeze(fridge);

// you cannot add new properties to the fridge
fridge.chicken = 3;
console.log('fridge', fridge); // no changes

delete fridge.fries;
console.log('firdge', fridge); // no changes

fridge.fries = 3;
console.log('firdge', fridge); // no changes