const formatCurrency = function (currencySymbol, decimalSeparator) {
    return function (value) {
        const wholePart = Math.trunc(value / 100);
        let fractionPart = value % 100;
        if (fractionPart < 10) fractionPart = '0' + fractionPart;
        return `${currencySymbol}${wholePart}${decimalSeparator}${fractionPart}`;
    }
}

const formatter = formatCurrency('€', '.');
const currencies = [0, 1209, 10000, 10010];

// Return an array of formatted values
let formattedCurrencies = [];
currencies.forEach(value => {
    formattedCurrencies.push(formatter(value));
});
console.log('formattedCurrencies', formattedCurrencies);

// Calculate the sum of the currencies array
let sum = 0;
currencies.forEach(value => {
    sum += value;
});
console.log('sum', sum);

// Filter expensive items (>= 10000)
let expensiveItems = [];
currencies.forEach(value => {
    if (value >= 10000) expensiveItems.push(value);
});
console.log('expensiveItems', expensiveItems);
