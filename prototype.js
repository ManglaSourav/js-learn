const makeUser = require('./call,bind,apply');
user1 = makeUser('cool', 22);
console.log(user1);

function CreateUser(name, age) { //compare this with makeUser Definition in imported file
  this.name = name;
  this.age = age;
}
const user2 = new CreateUser('sourav mangla',23);
const user3 = CreateUser('cool',22); //this is wrong 
const user4 = CreateUser('mangle',22);
console.log(user2,user3);

console.log(user2.__proto__);
console.log(CreateUser.prototype.__proto__); //everything in js is object
console.log(CreateUser.constructor);
console.log(user1.__proto__);

CreateUser.prototype.printName = function(){
    console.log(this.name);
    
}

user2.printName();

