const formatCurrency = function (currencySymbol, decimalSeparator) {
    return function (value) {
        const wholePart = Math.trunc(value / 100);
        let fractionPart = value % 100;
        if (fractionPart < 10) fractionPart = '0' + fractionPart;
        return `${currencySymbol}${wholePart}${decimalSeparator}${fractionPart}`;
    }
}

const formatter = formatCurrency('$', ',');

console.log(formatter(0));
console.log(formatter(1209));