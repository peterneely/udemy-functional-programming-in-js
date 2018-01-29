const cloneObject = o => JSON.parse(JSON.stringify(o));

const domNode = {
    className: 'js-container',
    tagName: 'div',
    childNodes: [{ text: 'Hi' }]
};

const clonedNode = cloneObject(domNode);

domNode.childNodes[0] = {};

console.log('domNode', domNode);
console.log('clonedNode', clonedNode);