
// intilization 

// while(condition){
// statements 
// increment / decrement
//}

// program 1

let i1 = 1
while (i1 <= 5) {
    console.log(i1)
    i1 = i1 + 1
}

// program 2
// print "hello"  3 times
let i2 = 1
while (i2 <= 3) {
    console.log("hello")
    i2 = i2 + 1
}

// program 3
// print 5 to 1

let i3 = 5
while (i3 >= 1) {
    console.log(i3)
    i3 = i3 - 1
}

// program 4
// print table of 2

let i4 = 2
while (i4 <= 20) {
    console.log(i4)
    i4 = i4 + 2
}

let i5 = 50
while (i5 >= 5) {
    console.log(i5)
    i5 = i5 - 5
}


// program 6
// break with while loop

let i6 = 1
while (i6 <= 5) {
    console.log(i6)
    if (i6 == 3) {
        break
    }
    i6 = i6 + 1
}


let i7 = 1
while (i7 <= 5) {
    if (i7 == 3) {
        break
    }
    console.log(i7)
    i7 = i7 + 1
}


for (let i = 1; i <= 5; i++) {
    console.log(i)
    if (i == 3) {
        break
    }
}


for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        continue
    }
    console.log(i)
}


let i9 = 1
while (i9 <= 5) {
    if (i9 == 3) {
        i9++ // 4
        continue
    }
    console.log(i9)
    i9 = i9 + 1
}