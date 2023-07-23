// There are 3 basic types in TypeScript
var isDone = false;
var lines = 42;
var namee = "Anders";
// But you can omit the type annotation if the variables are derived
// from explicit literals
// let isDone = false;
// let lines = 42;
// let namee = "Andeers";
var notSure = 32;
notSure = "32";
notSure = false;
// console.log(notSure)
// Use const keyword for constants
var CONST = 1;
// CONST=2 Error
// console.log(CONST);
// For collections, there are typed arrays and generic arrays
var myList = [1, 2, 3, 4];
myList.push(5);
// console.log(myList);
// Alternatively, using the generic array type
var myList2 = [1, 2, 3];
// console.log(myList2);
// Enum
var color;
(function (color) {
    color[color["RED"] = 0] = "RED";
    color[color["GREEN"] = 1] = "GREEN";
    color[color["BLACK"] = 2] = "BLACK";
})(color || (color = {}));
var c = color.GREEN;
// console.log(color[c], c, typeof c);
// Lastly, "void" is used in the special case of a function returning nothing
function nothing() {
    console.log("nothing returing");
}
// nothing()
// Functions are first class citizens, support the lambda "fat arrow" syntax and
// use type inference
// The following are equivalent, the same signature will be inferred by the
// compiler, and same JavaScript will be emitted
var f1 = function (i) {
    return i * i;
};
// Return type inferred
var f2 = function (i) { return i * i; };
// "Fat arrow" syntax
var f3 = function (i) { return i * i; };
// "Fat arrow" syntax with return type inferred
var f4 = function (i) { return i * i; };
// "Fat arrow" syntax with return type inferred, braceless means no return
// keyword needed
var f5 = function (i) { return i * i; };
// Object that implements the "Person" interface
// Can be treated as a Person since it has the name and move properties
var p = { name: "Bobby", move: function () { } };
// Objects that have the optional property:
var validPerson = { name: "Bobby", age: 42, move: function () { } };
// Only the parameters' types are important, names are not important.
var search;
search = function (src, sub) {
    return src.search(sub) != -1;
};
// console.log(search("hii","ii"));
