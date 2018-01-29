const rectangleArea = function () {
    return this.width * this.height;
};

console.log(rectangleArea());

const rectangle = {
    width: 5,
    height: 4
};

console.log(rectangleArea.bind(rectangle)());