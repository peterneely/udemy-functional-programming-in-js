const basket = [];

function addElement(
    itemName,
    itemPrice
) {
    basket.push({
        itemName,
        itemPrice
    });
}

addElement('Biscuits', 1);

console.log(basket);