// program 1

// function addition() {
//     console.log('add 1')
// }

// function addition2() {
//     console.log("add 2")
// }
// addition2()
// addition()

// program 2

// function addThree() {
//     setTimeout(function () {
//         console.log('add3')
//     }, 3000)
// }

// function addFour() {
//     console.log('add4')
// }
// addThree()
// addFour()


// program 3
// usercreation----- userid------userinfo
function getInfo() {
    setTimeout(function () {
        console.log("user created")
    }, 3000)

    setTimeout(function () {
        console.log("getId")
    }, 2000)

    setTimeout(function () {
        console.log("getInfo")
    }, 1000)
}

getInfo()

// program 3  async ----synchronously execute
// call back hell
code tightly coupled