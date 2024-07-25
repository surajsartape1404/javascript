// for loop and while loop

// for(intialization ; conditionCheck ; increment/decrement){
//     // statements
// }

// program 1
// i++ -- increment value of i by 1
// i-- -- decrement value of i by 1

// print 1 to 3
for (let i = 1; i <= 3; i++) {
    console.log(i)
}

// print "hello" 3 times
// program 2
for (let i = 1; i <= 3; i++) {
    console.log('hello')
}

// print 1 to 5
// program 3
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

// program 4
// print 5 to 1
for (let i = 5; i >= 1; i--) {
    console.log(i)
}
// program 5
for (let i = 1; i <= 10; i++) {
    console.log(i * 2)
}
// program 6

for (let i = 2; i <= 20; i = i + 2) {
    console.log(i)
}

for (let i = 50; i >= 5; i = i - 5) {
    console.log(i)
}

let ne = "chandrapur"
let original = ne.split('')
let removeDuplicate = []


for (let i = 0; i < original.length; i++) {
    if (!removeDuplicate.includes(original[i])) {
        removeDuplicate.push(original[i])
    }

}
console.log(removeDuplicate)
console.log(removeDuplicate.join(""))




//for loop and while loop

// for(intialization ; conditioCheck ; increment/decrement){
//     // statement
// }

// intialization
// while(condition){
// statements 
// increment / decrement
//}

// program 1
// print 1 to 3

for (let i = 1; i <= 3; i++) {
    console.log(i)
}

let i1 = 1
while (i1 <= 3) {
    console.log(i1)
    i1 = i1 + 1
}

// program 2
// print "hello" 3 times
for (let i = 1; i <= 3; i++) {
    console.log("hello")
}

let i2 = 1
while (i2 <= 3) {
    console.log("hello")
    i2 = i2 + 1
}

// program 3
// print 5 to 1

for (let i = 5; i >= 1; i--) {
    console.log(i)
}

let i3 = 5
while (i3 >= 1) {
    console.log(i3)
    i3 = i3 - 1
}

// program 4
// print table of 2 using for loop
for (let i = 2; i <= 20; i = i + 2) {
    console.log(i)
}

let i4 = 2
while (i4 <= 20) {
    console.log(i4)
    i4 = i4 + 2
}

// program 5
// break statement with for loop
for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        break
    }
    console.log(i)
}

let i5 = 1
while (i5 <= 5) {
    if (i5 == 3) {
        break
    }
    console.log(i5)
    i5 = i5 + 1
}


// class 7 pm - for loop
// class 7:30 - while loop

// program 6

for (let i = 2; i <= 20; i = i + 2) {
    console.log(i)
}

let i7 = 2
while (i7 <= 20) {
    console.log(i7)
    i7 = i7 + 2
}

// program 7

for (let i = 50; i >= 5; i = i - 5) {
    console.log(i)
}

let i8 = 50
while (i8 >= 5) {
    console.log(i8)
    i8 = i8 - 5
}

// program 8

//for with break statement
// break statement


for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        break
    }
    console.log(i)
}

for (let i = 1; i <= 5; i++) {
    console.log(i)
    if (i == 3) {
        break
    }
}

for (let i = 5; i >= 1; i--) {
    console.log(i)
    if (i == 3) {
        break
    }
}


let i10 = 5
while (i10 >= 1) {
    if (i10 == 3) {
        break
    }
    console.log(i10)
    i10 = i10 - 1
}

// program 9
// continue statement with for loop

for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        continue
    }
    console.log(i)
}

for (let i = 1; i <= 5; i++) {
    if (i == 4) {
        continue
    }
    console.log(i)
}

// continue statement with while loop
let i9 = 1
while (i9 <= 5) {
    if (i9 == 3) {
        i9++
        continue
    }
    console.log(i9)
    i9 = i9 + 1
}

let i11 = 1
while (i11 <= 5) {
    if (i11 == 3) {
        i11++
        continue
    }
    console.log(i11)
    i11 = i11 + 1
}

// switch case without break statement

// program 1 
let city = "jaipur"
switch (city) {
    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")
    case "kanpur":
        console.log("UP")
    default:
        console.log("Incorrect city name")

}

let city4 = "Ujjain"
switch (city4) {
    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")
    case "ujjain":
        console.log("MP")
    case "kanpur":
        console.log("UP")
    default:
        console.log("incorrect cityname")
}


// switch case with break statement

let city2 = "Jaipur"
switch (city2) {
    case "pune":
        console.log("MH")
        break
    case "jaipur":
        console.log("RJ")
        break
    case "kanpur":
        console.log("UP")
        break
    default:
        console.log("incorrect city pune")
}

// multiple case for single output

// program 3
let city3 = "mumbai"
switch (city3) {
    case "nagpur":
    case "mumbai":
        console.log("MH")
        break
    case "indore":
    case "bhopal":
        console.log("MP")
        break
    case "kanpur":
    case "lucknow":
        console.log("UP")
    default:
        console.log("incorrect city name")
}

let city5 = "kanpur"
switch (city5) {
    case "pune":
        console.log("MH")
        break
    case "jaipur":
        console.log("RJ")
        break
    case "kanpur":
        console.log("UP")
        break
    case "indore":
        console.log("MP")
        break
    default:
        console.log("Incorrect city name")
}

// multiple case for single output

let city6 = "J"
switch (city6) {
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    case "kanpur":
    case "lucknow":
        console.log("UP")
        break
    case "indore":
    case "bhopal":
        console.log("MP")
        break
    default:
        console.log("Incorrect city name")
}



// program 4
// find greatest with 3 numbers
let x1 = 10
let x2 = 50
let x3 = 200
let greatest = true

switch (greatest) {
    case x1 > x2 && x1 > x3:
        console.log("x1 is greater")
        break
    case x2 > x1 && x2 > x3:
        console.log("x2 is greater")
        break
    default:
        console.log("x3 is greater")
}


if (x1 > x2 && x1 > x3) {
    console.log("x1 is greater")
}
else if (x2 > x1 && x2 > x3) {
    console.log("x2 is greater")
}
else {
    console.log("x3 is greater")
}