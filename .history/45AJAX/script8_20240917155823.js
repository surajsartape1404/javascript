

let proOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve ('user one created')
    }, 1000);
})

let proTwo = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve ('user two created')
    }, 1000);
})

let proThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve ('user three created')
    }, 1000);
})

let pro = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve ('user one created')
    }, 1000);
})