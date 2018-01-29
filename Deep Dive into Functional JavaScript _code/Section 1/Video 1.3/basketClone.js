const basket = [];

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function addElement(basket, itemName, itemPrice) {
    return deepClone(basket).concat([{
        itemName,
        itemPrice
    }]);
}

const basket1 = addElement(basket, 'Biscuits', 1);
const basket2 = addElement(basket1, 'Tea', 2);

basket2[0].itemPrice = 2;

console.log(basket1[0].itemPrice);