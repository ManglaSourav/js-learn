
// These three method used for function borrowing 
// means using a defined function as it own function

const CreateUser = (name, age, work = "nothing") => {
  const newUser = {};
  newUser.name = name;
  newUser.age = age;
  newUser.work = work;
  return newUser;
}

console.log(CreateUser("sourav", 23));

let printName = function (city) {
  console.log(this.name, " ", this.age, " from ", city);
};

const user1 = CreateUser("sourav", 23);
const user2 = CreateUser("mangla", 22);

// First argument is refernce to this and further arguments are function arguments
printName.call(user1, "palwal");
// differnce from call is passing method arguments in a list
printName.apply(user2, ["mumbai", "Hiii"]);
// It will create a printName method's copy and bind it with user2 reference and return it
printName.bind(user2, "mumbaii", "Hii")(); // bind return a function and we are calling it here

module.exports = CreateUser;
