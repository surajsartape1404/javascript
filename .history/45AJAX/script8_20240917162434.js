

// let proOne = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve('user one created')
//     }, 1000);
// })

// let proTwo = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve('user two created')
//     }, 2000);
// })

// let proThree = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve('user three created')
//     }, 3000);
// })

// let proFour = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve('user four created')
//     }, 4000);
// })

// Promise Combinator--------parallel extenction

// 1.Promise.all()--------------------------------------------

// Promise.all([proOne,proTwo,proThree,proFour])
// .then(function(arr){
//     console.log(arr)
// })
// .catch(function(arr){
//     console.log(arr)
// })

// 2.Promise.allsettled()-------------------------------------

// let proOne = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve('user one created')
//     }, 1000);
// })

// let proTwo = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve('user two created')
//     }, 2000);
// })

// let proThree = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve('user three created')
//     }, 3000);
// })

// let proFour = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve('user four created')
//     }, 4000);
// })

// Promise.allSettled([proOne, proTwo, proThree, proFour])
//     .then(function (arr) {
//         console.log(arr)
//     })

// 3.promise.race()--------------------------------------------------

let proOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('user one created')
    }, 2000);
})

let proTwo = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('user two created')
    }, 2000);
})

let proThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('user three created')
    }, 3000);
})

let proFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('user four created')
    }, 1000);
})

Promise.race([proOne,proTwo,proThree,proFour])
.then(function(arr){
    console.log(arr)
})
.catch(function(arr){
    console.log(arr)
})

// Promise.any()---------------------------------------------------

let proOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('user one created')
    }, 2000);
})

let proTwo = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('user two created')
    }, 3000);
})

let proThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('user three created')
    }, 4000);
})

let proFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('user four created')
    }, 2000);
})

