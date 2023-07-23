// Iterators and Generators
// for..of statement
// iterate over the list of values on the object being iterated
var arrayOfAnyType = [1, "string", false];
for (var _i = 0, arrayOfAnyType_1 = arrayOfAnyType; _i < arrayOfAnyType_1.length; _i++) {
    var val = arrayOfAnyType_1[_i];
    console.log(val); // 1, "string", false
}
var list = [4, 5, 6];
for (var _a = 0, list_1 = list; _a < list_1.length; _a++) {
    var i = list_1[_a];
    console.log(i); // 4, 5, 6
}
// for..in statement
// iterate over the list of keys on the object being iterated
for (var i in list) {
    console.log(i); // 0, 1, 2
}
// Type Assertion
var foo = {}; // Creating foo as an empty object
foo.bar = 123; // Error: property 'bar' does not exist on `{}`
foo.baz = 'hello world'; // Error: property 'baz' does not exist on `{}`
console.log(foo);
var foo = {}; // Type assertion here
foo.bar = 123;
foo.baz = 'hello world';
console.log(foo);
