// async vs sync

// program 1

function additionA() {
    console.log("addition A")
}

function additionB() {
    console.log("addition B")
}

additionA()
additionB()

Program

function additionD() {
    setTimeout(function () {
        console.log("addition D")
    }, 3000)
}

function additionE() {
    console.log("addition E")
}

additionD()
additionE()

// Program 3