
// program 1
// rest operator

// function addAll(...arr) {
//     console.log(arr)
//     return arr.reduce(function (acc, el) {
//         return el + acc
//     }, 0)
// }
// let q = addAll(1, 2, 3, 4, 5, 6, 7, 8, 9)
// console.log(q)

// program 2
// spread operator

// let numbers = [0,1,2,3,4,5,6,7,8,9]
// function addFirstFour(a,b,c,d){
//     console.log(a+b+c+d)
// }
// addFirstFour(...numbers)

// program 3

let numbers2 = [10,20,30,40,50]
console.log(numbers2)

function addFirstFour(a,b,c,d,...e){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}
addFirstFour(...numbers2)


// program 4 
let m = [10,20,30]
let n = [...m]
