console.log("hello");


let a = 10
console.log(a)

let x = 10
let y = 5

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)

function Calculator(x, y) {
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
}
Calculator(11, 4)



// function without parameter and without return 

function add() {
    console.log(9 + 7)
}
add()
add()
add()
add()
add()
add()

// function with parameter and with return type 
function addB(x, y) {
    console.log(x + y)
}
addB(12, 3)
addB(12, 31)
addB(12, 311)
addB(12, 3111)

// function with parameter and with return type 

function addC(x, y) {
    return x + y
}
let e = addC(12, 4)
console.log(e)
console.log(e + e)
console.log(e * 0.10)