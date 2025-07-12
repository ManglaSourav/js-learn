/**
 * A pure function does not have side effects 
 *  example of side effects:-
 * 
  1.changing the file system
  2.inserting a record into a database
  3.making an http call
  4.mutations
  5.printing to the screen / logging
  6.obtaining user input
  7.querying the DOM
  8.accessing system state
 * 
 */

// impure function
// function foo(x) {
//   y++;
//   z = x * y;
// }
// var y = 5,
//   z;
// foo(20);
// console.log(z); //120
// foo(25);
// console.log(z); //175

//pure wrapper function
function bar(x, y) {
  var z;
  foo(x);
  return [y, z];
  function foo(x) {
    y++;
    z = x * y;
  }
}
console.log(bar(20, 5));
console.log(bar(25, 6));
