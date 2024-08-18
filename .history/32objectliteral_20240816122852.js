// object literal
let suraj = {
    firstName: "suraj",
    lastName: "sartape",
    age: 25,
    city: "latur"
}
console.log(suraj)

let shubham = {
    firstName: "shubham",
    lastName: "sartape",
    age: 30,
    city: "pune"
}
console.log(shubham)


// class 
// user defined data type

class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    city = undefined
}

let surajB = new Person()
let shubhamB = new Person()
console.log(surajB)
console.log(shubhamB)


surajB.firstName = "amol2"
surajB.lastName = "rao"
surajB['age'] = 23
surajB['rollno'] = 55


