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
// which is simiar to Parent.prototype

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