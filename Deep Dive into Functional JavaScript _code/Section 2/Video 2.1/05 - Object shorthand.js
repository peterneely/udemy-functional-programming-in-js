let entertain = 'Entertain';
let you = 'You';
let me = {
    entertain,
    you,
    toString() {
        return `
            Let 
            me 
            ${this.entertain} 
            ${this.you}`;
    }
};

console.log(me);

console.log(me.toString());