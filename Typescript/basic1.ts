// There are 3 basic types in TypeScript
let isDone: boolean = false;
let lines: number = 42;
let namee: string = "Anders";

// But you can omit the type annotation if the variables are derived
// from explicit literals
// let isDone = false;
// let lines = 42;
// let namee = "Andeers";

let notSure: any = 32
notSure = "32"
notSure = false
// console.log(notSure)

// Use const keyword for constants
const CONST = 1
// CONST=2 Error
// console.log(CONST);

// For collections, there are typed arrays and generic arrays
let myList: number[] = [1,2,3,4]
myList.push(5)
// console.log(myList);
// Alternatively, using the generic array type
let myList2: Array<number> = [1,2,3]
// console.log(myList2);


// Enum
enum color {RED, GREEN, BLACK}
let c: color = color.GREEN
// console.log(color[c], c, typeof c);


// Lastly, "void" is used in the special case of a function returning nothing
function nothing():void{
    console.log("nothing returing")
}
// nothing()


// Functions are first class citizens, support the lambda "fat arrow" syntax and
// use type inference
// The following are equivalent, the same signature will be inferred by the
// compiler, and same JavaScript will be emitted
let f1 = function (i:number):number {

    return i*i
}
// Return type inferred
let f2 = function (i: number) { return i * i; }
// "Fat arrow" syntax
let f3 = (i: number): number => { return i * i; }
// "Fat arrow" syntax with return type inferred
let f4 = (i: number) => { return i * i; }
// "Fat arrow" syntax with return type inferred, braceless means no return
// keyword needed
let f5 = (i: number) => i * i;

// Interfaces are structural, anything that has the properties is compliant with
// the interface
interface Person {
  name: string;
  // Optional properties, marked with a "?"
  age?: number;
  // And of course functions
  move(): void;
}

// Object that implements the "Person" interface
// Can be treated as a Person since it has the name and move properties
let p: Person = { name: "Bobby", move: () => { } };
// Objects that have the optional property:
let validPerson: Person = { name: "Bobby", age: 42, move: () => { } };
// Is not a person because age is not a number and move is not defined
// let invalidPerson: Person = { name: "Bobby", age: true };


// Interfaces can also describe a function type
interface mySearch{
    (source: string, subString: string): boolean;
}

// Only the parameters' types are important, names are not important.
let search : mySearch;
search =  (src: string, sub: string) => { 
      return src.search(sub) != -1;
}
// console.log(search("hii","ii"));


