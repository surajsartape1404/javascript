

// falsy values => null , undefined , "", 0 , 23 > 3 ,NaN.............................................................


// program 1.......rest operator

// let infoC = {
//     firstName: "suraj",
//     lastName: "sartape",
//     age: 20,
//     rollNo: 73
// }

// let { firstName, ...otherinfo } = infoC
// console.log(firstName)
// console.log(otherinfo)

// program 2.......rest operator

// let names = ['suraj', "sagar", "shubham", "ajay"]
// let [a, ...b] = names

// console.log(a)
// console.log(b)

// program 3.......
// rest and spread operator using function

// let infoD = {
//     firstName: "suraj",
//     lastName: "sartape",
//     age: 25,
//     rollNo: 75,
//     city: "latur"
// }

// function displayFullName({ firstName, lastName, ...info }) {
//     console.log(firstName)
//     console.log(lastName)
//     console.log(info)
// }
// displayFullName(infoD)

// program 4........

let isLoggedIn = false
let user = { name: "john" }
let val = isLoggedIn && user.name
console.log(val)


let isLoggedIn1 = true
let user1 = { name: "suraj" }
let val1 = isLoggedIn1 && user1.name
console.log(val1)


// let isLoggedIn2 = true
// let user2 = { name: "suraj" }
// let val2 = 2 > 3 && 0
// console.log(val2)

let isLoggedIn2 = true
let user2 = { name: "suraj" }
let val2 = 3 > 2 && user2.name
console.log(val2)

let isLoggedIn2 = true
let user2 = { name: "suraj" }
let val3 = null && user2.name
let val4 = undefined && user2.name
let val5 = '' && "bye"

