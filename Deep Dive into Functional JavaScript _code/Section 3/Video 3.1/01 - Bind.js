const area = function () {
    return this.width * this.height;
};

// bind returns a function
const boundArea = area.bind({ width: 2, height: 3 });

console.log(boundArea());