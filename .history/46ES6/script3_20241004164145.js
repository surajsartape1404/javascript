// null coalescing

// 0 -----> valid value 
let q1 = 0
let t = q1 || "suraj"
console.log(t)


//null or undefined
let t2 = ' ' ?? "suraj"
console.log(t2)

// optional parameter

let info = {
    firstName: "suraj",
    lastName: "sartape",
    parent: {
        mother: {
            firstName: "bhagyashri",
            lastName: "sartape"
        }
        ,
        father: "dayanand"
    }
}
// TypeError: Cannot read properties of undefined (reading 'mother')
console.log(info.parent?.mother?.lastName)
