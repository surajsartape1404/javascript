// async vs sync

// program 1

// function additionA() {
//     console.log("addition A")
// }

// function additionB() {
//     console.log("addition B")
// }

// additionA()
// additionB()

// // Program 2

// function additionD() {
//     setTimeout(function () {
//         console.log("addition D")
//     }, 3000)
// }

// function additionE() {
//     console.log("addition E")
// }

// additionD()
// additionE()

// Program 3

function getInfo() {
    setTimeout(function () {
        console.log("create user")
    }, 3000)

    setTimeout(function () {
        console.log("create id")
    }, 2000)

    setTimeout(function () {
        console.log("get info")
    }, 1000)
}
getInfo()

// Program 4
// call back hell 

function getInfo(){
    setTimeout(function(){
        console.log("create user"),
        set
    })
}