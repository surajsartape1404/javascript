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


// script35.js          script35.js             script35.js             script35.js

// let info = {
//     firstName: "chinmay",
//     lastName: "deshpande",
//     1: "34"
// }

// // string
// for (let key in info) {
//     console.log(typeof key)
// }

// // map -
// // keys - values
// // keys can be any different datatype

// // define empty map
// let roles = new Map()
// console.log(roles.size)
// roles.set(1, "admin")
// roles.set(2, "customer")
// roles.set(3, "manager")
// roles.set(4, "support")
// console.log(roles)
// console.log(roles.size)

// // define map with values
// let rolesB = new Map(
//     [
//         [1, "admin"],
//         [2, "customer"],
//         [3, "manager"],
//         [4, "support"]

//     ]
// )
// console.log(rolesB)
// // methods and properties

// let mapC = new Map()
// console.log(mapC)

// mapC.set(1, "admin")
// console.log(mapC)
// mapC.set(2, "manager")
// mapC.set(2, "customer")
// mapC.set(4, "manager")
// mapC.set(5, "tech")
// mapC.set(6, "manager")
// mapC.set(4, "managerB")

// // get
// let q1 = mapC.get(1)
// console.log(q1)
// console.log(mapC)

// // set(2,"admin")
// // get(2)
// // set(2,"admin")

// // program 3
// console.log(mapC)
// let q2 = mapC.has(2)
// console.log(q2)

// if (mapC.has(2)) {
//     console.log(mapC.get(2))
// }
// else {
//     console.log("key not available")
// }
// // has() , get(), set()-- to set and update value

// // program 4
// let skills = ["python", "javascript", "sql"]
// let mapD = new Map([
//     ["firstName", "chinmay"],
//     [skills, 3],
//     [true, "candrive"]
// ])
// console.log(mapD)
// console.log(mapD)
// // mapD.clear()
// console.log(mapD)

// mapD.forEach(function (a, b) {
//     //console.log(a)
//     console.log(b)
// })

// for (let key of mapD.keys()) {
//     console.log(key)
// }
// for (let val of mapD.values()) {
//     console.log(val)
// }
// for (let arr of mapD.entries()) {
//     console.log(arr)
// }

// mapD.delete(skills)
// console.log(mapD)

// script36.js          script36.js             script36.js             script36.jss

// let setA = new Set([11, 22, 33, 33])
// console.log(setA)
// console.log(typeof setA)

// let n = [11,22,33]
// console.log(typeof n)

// let mapD = new Map()
// console.log(typeof mapD)


// let setB = new Set()
// setB.add(22)
// setB.add(33)
// setB.add(44)
// setB.add(55)
// console.log(setB.size)

// console.log(setB.has(55))

// // setB.clear()
// // console.log(setB)

// setB.delete(33)
// console.log(setB)

// setB.forEach(function (el) {
//     console.log(el)
// })

// console.log(setB.entries())
// console.log(setB.keys())
// console.log(setB.values())



// script37.js (set & get keyword)             script37.js             script37.js                 script37.js

// program 1

// class Person {
//     firstName = undefined
//     lastName = undefined
//     age = undefined
//     rollNo = undefined
// }

// let amol = new Person()
// let chinmay = new Person()
// console.log(amol)
// console.log(chinmay)

// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.age)
// console.log(amol.rollNo)

// // .dot notation and bracket notation
// amol.firstName = "amol"
// amol.lastName = "rao"
// amol.age = 34
// amol.rollNo = 55

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:34,
//     rollNo:55
// }

// program 2
// Setting the value at the time of object creation

// class PersonB {

//     constructor(fn, ln, ag, rollNo) {
//         this.firstName = fn
//         this.lastName = ln
//         this.age = ag
//         this.rollNo = rollNo
//     }
// }

// let amolB = new PersonB("amol", "rao", 34, 45)
// console.log(amolB)
// amolB.city = "pune"
// console.log(amolB)
// let chinmayB = new PersonB("chinmay", "deshpande", 45, 66)
// console.log(chinmayB)

// // program 3
// // Setting the value using get and set methods

// class PersonC {
//     setAge(ag) {
//         this.age = ag
//     }
//     setRollNo(rn) {
//         this.rollNo = rn
//     }
//     setFirstName(fn) {
//         this.firstName = fn
//     }
//     setLastName(ln) {
//         this.lastName = ln
//     }
// }
// let amolC = new PersonC()
// console.log(amolC)
// amolC.setFirstName("amolc")
// amolC.setLastName("amolc")
// amolC.setRollNo(24)
// amolC.setAge(45)
// console.log(amolC)
// amolC.city = "pune"
// // program 4

// // set and get keyword

// let info = {
//     firstName: "chinmay",
//     lastName: "deshpande"
// }
// info.firstName = "tanmay"

// class PersonD {

//     set Fname(fn) {
//         this.firstName = fn
//     }

//     get Fname() {
//         return this.firstName
//     }

//     set Lname(ln) {
//         this.lastName = ln
//     }

//     get Lname() {
//         return this.lastName
//     }

// }

// let amolD = new PersonD()

// amolD.Fname = "amolD"
// console.log(amolD.Fname)

// amolD.Lname = "RaoD"
// console.log(amolD.Lname)



// script38.js

class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined

    displayName() {
        console.log(this.firstName + this.lastName)
    }
}

let amol = new Person()
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.age)
// console.log(amol.rollNo)

amol.firstName = "amol"
amol.lastName = "rao"
amol.age = 23
amol.rollNo = 66

console.log(amol.firstName)
console.log(amol.lastName)
console.log(amol.age)
console.log(amol.rollNo)
amol.displayName()

// program 2
// using constructor 


class PersonB {
    // properties
    constructor(fn, ln, ag, rn) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rn
    }
    // 


    displayName() {
        console.log(this.firstName + this.lastName)
    }
}

let chinmayB = new PersonB("chinmay", "deshpande", 23, 44)
console.log(chinmayB.firstName)
console.log(chinmayB.lastName)
console.log(chinmayB.age)
console.log(chinmayB.rollNo)

// program 3
// set  and get 

class PersonC {
    setFirstName(fn) {
        this.firstName = fn
    }

    setLastName(ln) {
        this.lastName = ln
    }

    setAge(ag) {
        this.age = ag
    }
    setRollNo(rn) {
        this.rollNo = rn
    }

}

let poorva = new PersonC()
poorva.setFirstName('poorva')
poorva.setLastName('vyas')
poorva.setAge(20)
poorva.setRollNo(12)
console.log(poorva)

// program 4

// set and get keyword
// set as a property 

class PersonD {
    set Fname(fn) {
        this.firstName = fn
    }
    get Fname() {
        return this.firstName
    }
    set Lname(ln) {
        this.lastName = ln
    }
    get Lname() {
        return this.lastName
    }
}

let poorvaB = new PersonD()

poorvaB.Fname = "poorva"
poorvaB.Lname = "vyas"

console.log(poorvaB.Fname)
console.log(poorvaB.Lname)