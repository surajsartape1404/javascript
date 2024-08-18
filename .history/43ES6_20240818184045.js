// Object literal
// Function constructor 
// Es6 class
// Object.create()


// let suraj = {
//     firstName:"shubham",
//     lastName:"sartape",
//     rollNo:34,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// suraj.displayName()

// function constructor


function Person(fn, ln, ag) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}
let suraj = new Person("suraj", "sartape", 25, 70)
let suraj2 = new Person("suraj2", "sartape2", 26, 71)
console.log(suraj)
console.log(suraj2)

suraj.displayName()
suraj2.displayName()

// Every object has one __proto__ === Parent.prototype

console.log(suraj.__proto__ === Person.prototype)
Person.prototype.displayName = function () {
    console.log(this.firstName + this.lastName)
}
Person.prototype.country = "India"

suraj.displayName()
suraj2.displayName()
console.log(suraj.hasOwnProperty("country"))


// array
let names = ["sarika", "shraddha", "shivani", "pooja"]
console.log(names)
names.forEach(function (el) {
    console.log(el)
})

// Array.prototype.chinmay  = function(){
//     console.log("hello")
// }
// names.suraj()


// Es6 class 

class PersonC {
    constructor(fn, ln, ag) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        // this.displayName = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }

}

PersonC.prototype.displayName = function () {
    console.log(this.firstName + this.lastName)
}

let suraj3 = new PersonC("suraj3", "sartape3", 25)
let suraj4 = new PersonC("suraj4", "sartape4", 26)
console.log(amol3)
console.log(amol4)

amol3.displayName()
amol4.displayName()


// Program 4
let obj = {
    init: function (fn, ln, ag) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
    },
    displayName: function () {
        console.log(this.firstName + this.lastName)
    }
}

let amol5 = Object.create(obj)
console.log(amol5)
amol5.init("amol5", "rao5", 34)
amol5.displayName()