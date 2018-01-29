const form = {
    name: 'Zsolt',
    email: 'info@zsoltnagy.eu',
    resetCallback: function (e) {
        // write code here
    },
    saveCallback: function (e) {
        // write code here
    },
    toString() {
        return `${this.name} <${this.email}>`;
    },
    log() {
        console.log(this.toString());
    }
};
