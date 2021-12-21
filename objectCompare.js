// compare two objects to determine if the first one contains equivalent property values to the second one.

const obj1 = { a: '123', b: '234' };
const obj1_same = { a: '123', b: '234' };
const obj2 = { a: '1223', b: '2234' };
const obj3 = { c: '123', b: '234', a: '123' };

console.log(obj1 === obj2);
console.log({ ...obj1 });

// for(let data in obj1){
//     console.log(data, obj1[data]);
// }
console.log(JSON.stringify(obj1) === JSON.stringify(obj1_same));
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
console.log(Object.keys(obj1));

const match = (obj1, obj2) =>
  Object.keys(obj1).every(
    key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]
  );

// .every(key => console.log('here') &&
//  console.log(key));

console.log(match(obj1, obj1_same));
console.log(match(obj1, obj2));
console.log(match(obj1, obj3));
