
// program 1.......

let infoC = {
    firstName: "suraj",
    lastName: "sartape",
    age: 20,
    rollNo: 73
}

let { firstName, ...otherinfo } = infoC
console.log(firstName)
console.log(otherinfo)

