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
const formattedCurrencies = currencies.map(formatter);
console.log('formattedCurrencies', formattedCurrencies);

// Calculate the sum of the currencies array
const sum = currencies.reduce((a, b) => a + b, 0);
console.log('sum', sum);

// Filter expensive items (>= 10000)
const expensiveItems = currencies.filter(v => v >= 10000);
console.log('expensiveItems', expensiveItems);
