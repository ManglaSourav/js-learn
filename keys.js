const obj = {
    a: "a",
    b: "b",
    c: {
        d: {}
    },
}

let z = Object.keys(obj)[2]
console.log(typeof obj[z]);
let keys = Object.keys(obj)
let i = 0;
for (i; i < Object.keys(obj).length; i++) {

    if (typeof obj[keys[i]] === 'object') {
        
        console.log(true);
        console.log(i);
        

    }
    // if ()

}