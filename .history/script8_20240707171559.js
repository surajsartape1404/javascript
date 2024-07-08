// for loop and while loop
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

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
// continue statement with for 

for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        continue
    }
    console.log(i)
}