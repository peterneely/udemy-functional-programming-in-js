// fries is not editable
let fridge = Object.defineProperty(
    {},
    'fries',
    {
        value: 1,
        enumerable: true
    }
);

// changing the fries property won't succeed
fridge.fries = 2;
console.log('fridge.fries', fridge.fries); // stays 1

// you can still add new properties to the fridge
fridge.chicken = 3;
console.log('fridge', fridge); // chicken is added to the fridge