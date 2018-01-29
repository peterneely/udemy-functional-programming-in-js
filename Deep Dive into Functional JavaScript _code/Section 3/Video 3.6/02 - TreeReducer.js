

const nodeList = [5, 2, 4];

const reducer = (tree, element) => {
    if (tree === null) {
        return {
            value: element,
            left: null,
            right: null
        };
    }
    if (element < tree.value) {
        tree.left = reducer(tree.left, element);
    } else {
        tree.right = reducer(tree.right, element);
    }

    return tree;
}

const tree = nodeList.reduce(reducer, null);

console.log(tree);