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
    type: "swift"
}
console.log(vehicle.color)
vehicle.color = "white"
vehicle.model = "vdi"
delete vehicle.type
console.log(vehicle)

vehicle1 = {
    color: "blue",
    type: "honda"
}

console.log(vehicle1['color'])
vehicle1['color'] = "red"
vehicle1['model'] = "Q4"
delete vehicle1['model']
console.log(vehicle1)


// for loop bracket notation
info4 = {
    firstName: "chinmay",
    lastName: "deshpande",
    mobileNo: 7709192441,
    age: 23,
    rollNo: 89,
    age: 44
}
for (let prop in info4) {
    console.log(prop, info4[prop])
}
