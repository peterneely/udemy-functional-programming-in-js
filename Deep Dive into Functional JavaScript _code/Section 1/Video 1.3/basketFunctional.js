const basket = [];

function addElement(
    basket,
    itemName,
    itemPrice
) {
    return basket.concat([{
        itemName,
        itemPrice
    }]);
}

const basket1 = addElement(
    basket,
    'Biscuits',
    1
);

console.log(basket1);