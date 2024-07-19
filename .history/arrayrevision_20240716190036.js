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

let namesB = ["chinmay", "sarika", "amol", "amit"]
let q5 = namesB.includes("amol")
console.log(q5)

let numbers2 = [11, 22, 33, 44, 55]
let q6 = numbers2.map(function (el, index, arr) {
    return el + 10
})
console.log(q6)

let marks = [33, 44, 56, 33, 44, 55, 66, 77]
let q7 = marks.filter(function (el, index, arr) {
    return el > 50
})
console.log(q7)

let numbersA = [11, 22, 33]
numbersA.reduce(function (acc, el, index, arr) {
    return acc + el
}, 5)
console.log(numbersA)


let cities1 = ["pune", "mumbai", "latur", "kolkata"]
cities1.forEach(function (el, index, arr) {
    console.log("welcome " + el)
})


let marksN = [12, 99, 88, 55, 66, 77, 12, 3, 45, 55]
let q8 = marksN.filter(function (el) {
    return el > 50
})
console.log(q8)


let q9 = marksN.find(function (el) {
    return el > 50
})
console.log(q9)


let q10 = marksN.findIndex(function (el) {
    return el > 50
})
console.log(q10)


let numberC = [11, 22, 33, 44, 55, 16]
let q11 = numberC.every(function (el) {
    return el > 10
})
console.log(q11)


let q12 = numberC.some(function (el) {
    return el > 50
})
console.log(q12)


let fruitsB = ["apple", "mango", "banana", "orange", "papaya"]
fruitsB.reverse()
console.log(fruitsB)


// sort()
let country3 = ["india", "pakistan", "bangladesh", "srilanka"]
country3.sort()
console.log(country3)


let marks1 = [97, 96, 95, 94, 93, 92, 91]
// marks1.fill("fill", startIndex, endIndex(not included))
let q13 = marks1.fill("not selected", 2, 5)
console.log(q13)


let state = [["mumbai", "nagpur"], ["jaipur", "udaipur"], ["lucknow", "kanpur"]]

console.log(state[0][1])
console.log(state[2][1])
console.log(state[1][1])
let q14 = state.flat()
console.log(q14)


let cities2 = ["pune", "nagpur", "mumbai", "kolkata"]
let c1 = cities2.indexOf('nagpur')
console.log(c1)

let c3 = cities2.at(1)
console.log(c3)


//concat()
let fruitsOne = ["apple", "banana", "grapes"]
let fruitsTwo = ["papaya", "chikoo", "jamun"]
let q15 = fruitsOne.concat(fruitsTwo)
console.log(q15)


let info2 = ["chinmay", "deshpande", 7709192441]
let q16 = info2.join(' ')
console.log(q16)


let q17 = info2.join('/')
console.log(q17)