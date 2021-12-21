// call by value
function callByValue(val) {
  val = val + 1; //can not change the outside val variable so call by value(passing the value of )
}
let val = 1;
callByValue(val);
console.log(val);

// call by refernce
function callByRef(obj) {
    obj.prop = 3; // can change the outside object attributes so call by referencec
}

let obj = { prop: 1 };
callByRef(obj);
console.log(obj);
