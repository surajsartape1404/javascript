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