const tree = {
    value: 5,
    left: null,
    right: {
        value: 8,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 11,
            left: null,
            right: null
        }
    }
}

const sumElements = tree =>
    tree === null ?
        0 :
        tree.value +
        sumElements(tree.left) +
        sumElements(tree.right);


console.log(sumElements(tree));