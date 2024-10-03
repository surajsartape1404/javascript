

let proOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve ('user one created')
    }, 1000);
})

let proTwo = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve ('user two created')
    }, 2000);
})

let proThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve ('user three created')
    }, 3000);
})

let proFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve ('user four created')
    }, 4000);
})

// Promise Combinator--------parallel extenction

// 1.Promiseall()

Promise.all([proOne,proTwo,proThree,proFour])
.then(function(arr){})
