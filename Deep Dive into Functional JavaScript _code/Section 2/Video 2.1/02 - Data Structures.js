{
    "use strict";
    const lunch = 'Pasta Carbonara'; // String
    const calories = 525;            // Number
    const isHot = true;              // Boolean
    const nothing = undefined;       // Undefined
    const emptyObject = null;       // Null (object)
    const ON = Symbol();             // Symbol
    const indexOutOfArray = [][0];   // Undefined

    console.log('typeof []', typeof []); // 'object'
    console.log('Array.isArray( [] )', Array.isArray([])); // true

    const arr = [1, 2, 3];

    arr[1] = 99;
    console.log('arr', arr);
};

