
// program 1.......rest operator

let infoC = {
    firstName: "suraj",
    lastName: "sartape",
    age: 20,
    rollNo: 73
}

let { firstName, ...otherinfo } = infoC
console.log(firstName)
console.log(otherinfo)

// program 2.......rest operator

let names  = ['suraj',"sagar","shubham","ajay"]
let[a,...b] = names

console.log(a)
console.log(b)
