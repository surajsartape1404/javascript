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