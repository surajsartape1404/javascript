// null coalescing
// 0 -----> valid value 
let q1 = 0 
let t = q1 || "samay"
console.log(t)

// if(q1 >= 0){
//     console.log("hello")
// }

//null or undefined
let t2 = ' ' ?? "chinmay"
console.log(t2)

// optional parameter

let info  = {
    firstName:"chinmay",
    lastName:"deshpande",
    parent:{
        mother:{
            firstName:"kachan",
            lastName:"deshpande"
        }
        ,
        father:"deshpande"
    }
}
// TypeError: Cannot read properties of undefined (reading 'mother')
console.log(info.parent?.mother?.lastName)
