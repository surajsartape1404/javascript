// Object

// Object does not stores the value by index 
//console.log(info2[0])
//Does not allow duplicate key-values 


let info2 = {
    firstName: "suraj",
    lastName: "sartape",
    age: 23,
    rollNo: 71,
    mobile: 7083646111
}
// Retrive (dot notation and bracket notation)
console.log(info2['firstName'])
console.log(info2.firstName)

// Update (dot notation and bracket notation)
info2['firstName'] = "sagar"
info2['lastName'] = "patil"
console.log(info2)

info2.firstName = "shubham"
info2.lastName = "singh"
console.log(info2)

// Add(dot notation and bracket notation)
info2.city = "pune"
info2['country'] = "india"
console.log(info2)

// Remove(dot notation and bracket notation)
delete info2['city']
delete info2.firstName
console.log(info2)


// program 2

let vehicle = {
    color: "red",
    type: "sedane"
}
console.log(vehicle.color)
vehicle.color = "blue"
vehicle.model = "QA"
delete vehicle.type

vehicle = {
    color: "red",
    type: "sedane"
}

console.log(vehicle['color'])
vehicle['color'] = "red"
vehicle['model'] = "Q4"
delete vehicle['model']
