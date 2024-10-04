// falsy = undefined, null, 0,  "", NaN, 8 > 9
// truthy = [], {}, 5 > 3, true, " ", "a"

// shot circuit
// 1. &&

let val = 6 > 3 && 5 == 7
console.log(val)

let val1 = "suraj" && "sartape"
console.log(val1)

let val2 = "suraj" && 5 < 10
console.log(val2)

let val3 = "suraj" && 45
console.log(val3)

let val4 = 10 + undefined && 3 + 3
console.log(val4)

let val5