// let sum = a => b => b ? sum(a + b) : a;
// console.log(sum(1)(2)(3)(4)());

// polifill=> sort of browser fallback means your browser dont have bind function definition so you have to provide that definition

let name = {
    firstname: "Sourav",
    lastname: "Mangla"
}

let printName = function (hometown, state, country) {
    console.log(this.firstname + " " + this.lastname + " , " + hometown + ", " + state + ", " + country);
}

let printMyName = printName.bind(name, "Dehradun", "Uttarakhand");
printMyName("India");

Function.prototype.mybind = function (...args) {
    let obj = this,
        params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printMyName2 = printName.mybind(name, "Dehradun", "Uttarakhand");
printMyName2("India");