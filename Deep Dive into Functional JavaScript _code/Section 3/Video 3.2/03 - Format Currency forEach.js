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

/*
// simple for loop: imperative
for ( let i = 0; i < currencies.length; ++i ) {
    console.log( formatter( currencies[i] ) );
}

// for...of: ES6, imperative, more compact
for ( let value of currencies ) {
    console.log( formatter( value ) );
}
*/

currencies.forEach(value => console.log(formatter(value)));
