const form = {
    name: 'Zsolt',
    email: 'info@zsoltnagy.eu',
    resetCallback: function (e) {
        document.querySelector('.js-name').value = this.name;
        document.querySelector('.js-email').value = this.email;
    },
    saveCallback: function (e) {
        this.name = document.querySelector('.js-name').value;
        this.email = document.querySelector('.js-email').value;
    },
    toString() {
        return `${this.name} <${this.email}>`;
    },
    log() {
        console.log(this.toString());
    }
};

document.querySelector('.js-reset')
    .addEventListener('click', () => form.resetCallback());

document.querySelector('.js-save')
    .addEventListener('click', () => form.saveCallback());

setInterval(() => form.log(), 1000);