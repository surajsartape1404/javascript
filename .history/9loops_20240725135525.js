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