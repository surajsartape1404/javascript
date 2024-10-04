// // falsy = undefined, null, 0,  "", NaN, 8 > 9
// // truthy = [], {}, 5 > 3, true, " ", "a"

// // shot circuit
// // 1. &&

// let val = 6 > 3 && 5 == 7
// console.log(val)

// let val1 = "suraj" && "sartape"
// console.log(val1)

// let val2 = "suraj" && 5 < 10
// console.log(val2)

// let val3 = "suraj" && 45
// console.log(val3)

// let val4 = 10 + undefined && 3 + 3
// console.log(val4)

// let val5 = 0 && "suraj"
// console.log(val5)

// ---------------------------------------------------------------------------------------------

// ||  or 

let val8 = "suraj" || "sartape"
console.log(val8)

let val9 = 3 > 4 || 9 < 7
console.log(val9)


let val10 = 0 || "no user"
console.log(val10)

// null , undefined

let val11 = 11 < 2 ?? "no user"
console.log(val11)
