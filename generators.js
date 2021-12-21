function* doIt() {
  console.log('initial run');
  let x; 
  yield 'pass the value of X';
  
  console.log(x);
  let y = yield 'pass the y';
  
  console.log(y);
  return x + y;
}

const test = doIt();
console.log(test.next());
console.log(test.next(2));
console.log(test.next(3));
console.log(test.next()); //waste call
