// async vs sync

function addition() {
    console.log("addition A")
}

function addition() {
    console.log("addition B")
}

additionA()
additionB()

function additionD(){
    setTimeout(function(){
        console.log("addition D")
    },3000)
}

function additionE(){
    console.log("addition E")
}

additionD
