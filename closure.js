// make a closure function that returns a function that returns a string
function makeClosure(test) {
    return function () {
        return test
    }
}

let test = "hello"
const closure = makeClosure(test)
console.log(closure())

test = "bye"
console.log(closure())

