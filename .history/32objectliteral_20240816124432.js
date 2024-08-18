// // object literal script32.js


// let suraj = {
//     firstName: "suraj",
//     lastName: "sartape",
//     age: 25,
//     city: "latur"
// }
// console.log(suraj)

// let shubham = {
//     firstName: "shubham",
//     lastName: "sartape",
//     age: 30,
//     city: "pune"
// }
// console.log(shubham)


// // class
// // user defined data type

// class Person {
//     firstName = undefined
//     lastName = undefined
//     age = undefined
//     city = undefined
// }

// let surajB = new Person()
// let shubhamB = new Person()
// console.log(surajB)
// console.log(shubhamB)


// surajB.firstName = "suraj"
// surajB.lastName = "sartape"
// surajB['age'] = 25
// surajB.['city'] = "latur"
// surajB['rollno'] = 70

// console.log(surajB)


// object literal (script34.js)

// // objects

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:23,
//     rollNo:34
// }

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:12,
//     rollNo:45
// }


// class Person {
//     firstName = undefined
//     lastName = undefined
//     age = undefined
//     rollNo = undefined

// }


// let amolA= new Person()
// console.log(amolA)
// amolA.firstName = "amolA"
// amolA.lastName ="raoA"
// amolA.age = 34
// amolA.rollNo = 45
// console.log(amolA)


// constructor

// class Person {

//     constructor(fn, ln, ag, rn) {
//         this.firstName = fn
//         this.lastName = ln
//         this.age = ag
//         this.rollNo = rn
//     }

// }

// let amolC = {
//     firstName: "amolC",
//     lastName: "raoC",
//     age: 33,
//     rollNo: 56
// }

// let students = [
//     new Person("amol", "rao", 34, 55),
//     new Person("amolB", "raoB", 33, 53),
//     new Person("amolC", "raoC", 33, 56),
//     new Person("amolD", "raoD", 33, 55)
// ]

// //console.log(students[2].lastName)
// students.forEach(function (el) {
//     console.log(el.firstName + el.lastName)
// })
// // average age of all students
// let total = students.reduce(function (acc, el) {
//     return acc + el.age
// }, 0)
// console.log(total / students.length)

// Set and Map



// let amolC = new Person("amolC",'raoC',34,55)
// let chinmayC = new Person("chinmayC","deshpandeC",34,55)
// console.log(amolC)




let info = {
    firstName: "chinmay",
    lastName: "deshpande",
    1: "34"
}

// string
for (let key in info) {
    console.log(typeof key)
}

// map -
// keys - values
// keys can be any different datatype

// define empty map
let roles = new Map()
console.log(roles.size)
roles.set(1, "admin")
roles.set(2, "customer")
roles.set(3, "manager")
roles.set(4, "support")
console.log(roles)
console.log(roles.size)

// define map with values
let rolesB = new Map(
    [
        [1, "admin"],
        [2, "cutomer"],
        [3, "manager"],
        [4, "supoort"]

    ]
)
console.log(rolesB)
// methods and properties 

let mapC = new Map()
console.log(mapC)

mapC.set(1, "admin")
console.log(mapC)
mapC.set(2, "manager")
mapC.set(2, "customer")
mapC.set(4, "manager")
mapC.set(5, "tech")
mapC.set(6, "manager")
mapC.set(4, "managerB")

// get
let q1 = mapC.get(1)
console.log(q1)
console.log(mapC)

// set(2,"admin")
// get(2)
// set(2,"admin")

// program 3
console.log(mapC)
let q2 = mapC.has(2)
console.log(q2)

if (mapC.has(2)) {
    console.log(mapC.get(2))
}
else {
    console.log("key not avaialble")
}
// has() , get(), set()-- to set and update value

// program 4
let skills = ["python", "javascript", "sql"]
let mapD = new Map([
    ["firstName", "chinmay"],
    [skills, 3],
    [true, "candrive"]
])
console.log(mapD)
console.log(mapD)
// mapD.clear()
console.log(mapD)

mapD.forEach(function (a, b) {
    //console.log(a)
    console.log(b)
})

for (let key of mapD.keys()) {
    console.log(key)
}
for (let val of mapD.values()) {
    console.log(val)
}
for (let arr of mapD.entries()) {
    console.log(arr)
}

mapD.delete(skills)
console.log(mapD)