// bind() , call() , apply()

let info = {
    firstName: 'suraj',
    lastName: 'sartape',
    displayName: function () {
        console.log(this.firstName + this.lastName)
    }
}

info.displayName()

let info2 = {
    firstName: "sagar",
    lastName: "sartape"
}

let info3 = {
    firstName: "shubham",
    lastName: "sartape"
}

let info4 = {
    firstName: "bhagyashri",
    lastName: "sartape"
}

// let display = info.displayName()

// let display = function () {
//     console.log(this.firstName + this.lastName)
// }

// display = display.bind(info2)
// display()


let display = function () {
    console.log(info3.firstName + info3.lastName)
}

display = display.bind(info3)
display()


let info2 = {
    firstName: "sagar",
    lastName: "sartape"
}

let info3 = {
    firstName: "shubham",
    lastName: "sartape"
}

let info4 = {
    firstName: "bhagyashri",
    lastName: "sartape"
}

let displayFirstName= function(word){
    console.log(word +" "+this.firstName)
}
// displayFirstName()
// let fn = displayFirstName.bind(info2)
