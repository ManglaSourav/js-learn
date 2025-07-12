const array = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9];

//splice :- modify array
console.log(array.splice(1, 0, 11)); // starting index, how many deleting from starting index, add values
console.log(array);

console.log();
console.log(array.splice(1, 5, 11));
console.log(array);

//slice :-  does not modify array
console.log();
console.log(array.slice(1, 4));
console.log(array);

var str = ["Apple", "Banana", "Kiwi"];
var res = str.slice(0,1,)
console.log();
console.log(res,str);
console.log(str.slice(0, 2));
