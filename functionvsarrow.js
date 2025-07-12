

// When working with callbacks or methods, regular functions can lose context of this.Arrow functions preserve it.
const obj = {
    name: 'Sourav',

    greet: function () {

        setTimeout(() => {
            console.log(`Hello, ${this.name}`); // ❌ undefined
        }, 1000);
    },

    greet2: function () {

        setTimeout(function () {
            console.log(`Hello, ${this.name}`); // ❌ undefined
        }, 1000);
    }
};
obj.greet2();
obj.greet();

