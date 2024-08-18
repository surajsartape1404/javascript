// function constructor 


function Person(fn, ln, ag, roll) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.roll = roll
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let suraj = new Person("suraj", "sartape", 25, 70)
let shubham = new Person("shubham", "sartape", 27, 50)

console.log(suraj)
console.log(shubham)

//console.log(suraj.__proto__ == parent.prototype)
// suraj.displayName()
// shubham.displayName()

// prototype inheritance
// every object has one __proto__ property 
// which is similar to Parent.prototype

console.log(suraj.__proto__ == Person.prototype)

Person.prototype.displayName = function () {
    console.log(this.firstName + this.lastName)
}
Person.prototype.country = "india"
suraj.displayName()
shubham.displayName()


console.log(suraj.firstName)
console.log(suraj.lastName)
console.log(suraj.age)
console.log(suraj.roll)
console.log(suraj.country)





//Object literal 

let amol = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 34,
    displayName: function () {
        console.log(this.firstName + this.lastName)
    }
}

let chinmay = {
    firstName: "amol",
    lastName: "rao",
    age: 34,
    displayName: function () {
        console.log(this.firstName + this.lastName)
    }
}

// function constructor 

function Person(fn, ln, ag) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.displayName = function () {
        console.log(this.firstName + this.lastName)
    }
}

let one = new Person("sarika", "pansare", 34)
let two = new Person("komal", "sharma", 44)

console.log(one.firstName)
console.log(one.lastName)
console.log(one.age)

console.log(two.firstName)
console.log(two.lastName)
console.log(two.age)

one.displayName()
two.displayName()

// ES6 class

class PersonC {
    constructor(fn, ln, ag) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }

}
let raj = new PersonC("raj", "kumar", 34)
let rohit = new PersonC("rohit", "dani", 45)
raj.displayName()
raj.displayName()


// Object.create method
let three = Object.create({})
three.firstName = "shraddha"
three.lastName = "pote"
three.age = 34
three.displayName = function () {
    console.log(this.firstName + this.lastName)
}
console.log(three)

// Prototype inheritance
function PersonD(fn, ln, ag) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}
let amolP = new PersonD("amol", "raop", 34)
let raviP = new PersonD("ravip", "raoP", 45)
console.log(amolP)
console.log(raviP)

// Every object has obj.__proto__ === Parent.prototype
console.log(amolP.__proto__ === PersonD.prototype)
console.log(raviP.__proto__ === PersonD.prototype)


PersonD.prototype.displayName = function () {
    console.log(this.firstName + this.lastName)
}
PersonD.prototype.country = "India"
amolP.displayName()
raviP.displayName()
console.log(amolP.country)