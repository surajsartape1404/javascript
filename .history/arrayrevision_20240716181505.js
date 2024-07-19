let names = ["chinmay", "sarika", "poorva", "ram", "sham"]
let e = names.length
console.log(e)

let fruits = ["apple", "mango", "banana", "orange"]
console.log(fruits.length)
console.log(fruits.length - 1)

// for loop

let vegetables = ["brinjal", "cabbage", "cauliflower"]

for (let i = 0; i < vegetables.length; i++) {
    //console.log(i)
    console.log(vegetables[i])
}

for (let i = vegetables.length - 1; i >= 0; i--) {
    //console.log(i)
    console.log(vegetables[i])
}

// while loop
// program1

let country = ["india", "srilanka", "cuba", "china"]

let i1 = 0
while (i1 < country.length) {
    //console.log(i1)
    console.log(country[i1])
    i1 = i1 + 1
}
// program2

let i2 = country.length - 1
while (i2 >= 0) {
    //console.log(i2)
    console.log(country[i2])
    i2 = i2 - 1
}


// Array Methods

let names1 = ["ninad", "vijeet", "ram", "raj"]
let q1 = names1.push("amol")
console.log(names1)
console.log(q1)

let cities = ["pune", "mumbai", "bangalore", "kolkata"]
let q2 = cities.unshift("nagpur")
console.log(cities)
console.log(q2)

let country1 = ["india", "pakistan", "srilanka", "bangladesh"]
let q3 = country1.pop()
console.log(country1)
console.log(q3)

let q4 = country1.shift()
console.log(q4)
console.log(country1)















