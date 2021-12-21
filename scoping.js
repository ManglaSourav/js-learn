var var1 = 'hey';

function foo1() {
  var var1 = 'bye';
  console.log('from foo1', var1);
}
globalVariable = 4;

function foo2() {
  var2 = 3;
  console.log(var2);

  var1 = 'hey1';
  //   var var2 = "hey2";
  console.log('from fom2 =>', var1, var2, globalVariable);
}
console.log(typeof variable); //
// console.log(variable); //this will give refernce error because we trying to access access a previously undeclared variable.

// console.log(var2); //refernce error in node but not in browsers because var2 is going to declare implicitly in window scope but in node we dont have window object.
foo1();
foo2();
console.log(var2);
