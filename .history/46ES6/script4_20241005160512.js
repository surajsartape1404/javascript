// bind() , call() , apply()

let info = {
    firstName: 'suraj',
    lastName: 'sartape'
    displayName: function () {
        console.log(this.firstName + this.lastName)
    }
}