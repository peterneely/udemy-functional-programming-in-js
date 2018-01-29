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

tcoSumElements = tree =>
    tcoSumNodeList([tree], 0);

tcoSumNodeList = ([head, ...tail], sum) =>
    typeof head === 'undefined' ?
        sum :
        head === null ?
            tcoSumNodeList(tail, sum) :
            tcoSumNodeList(
                [head.left, head.right, ...tail],
                sum + head.value
            );


console.log(tcoSumElements(tree));