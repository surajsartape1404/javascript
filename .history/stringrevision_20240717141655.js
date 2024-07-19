// String 

let firstName = "suraj"
console.log(firstName)
console.log(typeof firstName)

// program 2

let firstName2 = "suraj"
let lastName = "sartape"
let middleName = `dayanand`

console.log(firstName2)
console.log(lastName)
console.log(middleName)


let name = "chinmay"

console.log(name[0])
console.log(name.length)

// program 3

// number + string  =====> string
// string + number  =====> string
// number + number  =====> number
// string + string  =====> string

let a = 10
let b = 20
let c = "hello"

console.log(a + b + c)
// number + number + string
// 30    +  "hello"
//  30hello

console.log(c + b + a)
// // "hello" + 20 + 10
// // "hello2010"

console.log(a + c + b)
// // 10 + "hello" + 20
// // "10hello20"

// program 4
let fName = "suraj"
let lName = "sartape"
// My firstName is suraj and lastName is sartape
console.log("My firstName is " + fName + " and lastName is " + lName)
console.log(`My firstName is ${fName} and lastName is ${lastName}`)

// program5
let fname = "chinmay"
let lname = "deshpande"

console.log("My firstName name is " + fname + " and lastName is " + lname)
console.log(`My firstName name is ${fname} and lastName is ${lname}`)


// for loop
let name1 = "suraj"

console.log(name1[0])
console.log(name1.length)

for (let i = 0; i < name1.length; i++) {
    // console.log(i)
    console.log(name1[i])
}


// while loop 
let i1 = 0
while (i1 < name1.length) {
    //console.log(i1)
    console.log(name1[i1])
    i1 = i1 + 1
}

//  reverse - for loop
let city = "pune"
for (let i = city.length - 1; i >= 0; i--) {
    // console.log(i)
    console.log(city[i])
}


// reverse - while loop
let i3 = city.length - 1
while (i3 >= 0) {
    console.log(city[i3])
    i3 = i3 - 1
}

// methods

let city1 = "latur"
console.log(city)

//  0   1   2    3    4
//  l   a   t   u     r
console.log(city[0])

// charAt()
let e = city.charAt(0)
console.log(e)