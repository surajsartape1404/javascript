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
let country = ["india", "srilanka", "cuba", "china"]

let i1 = 0
while (i1 < country.length) {
    //console.log(i1)
    console.log(country[i1])
    i1 = i1 + 1
}