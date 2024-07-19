
// Destructing of objects and array
//              0         1       2        3
let names = ["chinmay", "amol", "raj", "satish"]
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])

let e1 = names[0]
let e2 = names[1]
let e3 = names[2]
let e4 = names[3]

console.log(e2)
console.log(e4)


// program 1
names = ["chinmay", "amol", "raj", "satish"]
let [a1, a2, a3, a4] = names
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)

// program 2
let fruits = ["apple", "mango", "banana", "grapes"]
let [f1, f2, f3, f4] = fruits
console.log(f1)
console.log(f2)
console.log(f3)
console.log(f4)

//program 3
let states = [["Nagpur", "Wardha"], ["Jaipur", "Udaipur"], ["Kanpur", "Lucknow"]]
console.log(states[0][1])
console.log(states[1][1])
console.log(states[2][0])

let [[a11, a22], [a33, a44], [a55, a66]] = states
console.log(a55)
console.log(a22)


// program 4

let info = {
    firstName: "suraj",
    lastName: "sartape"
}

let { firstName, lastName } = info
console.log(firstName)
console.log(lastName)

let { firstName: fn, lastName: ln } = info
console.log(fn)
console.log(ln)

// program 5

let students = {
    studentOne: {
        firstName: "suraj",
        lastName: "sartape"
    },
    studentTwo: {
        firstName: "sagar",
        lastName: "patil"
    }
}

let { studentOne: { firstName: f11, lastName: l11 }, studentTwo: { firstName: f22, lastName: l22 } } = students
console.log(f11)
console.log(f22)


// program 6

let student = [
    {
        firstName: "chinmay",
        lastName: "deshpande"
    },
    {
        firstName: "sarika",
        lastName: "pansare"
    }

]

let [{ firstName: q1, lastName: r1 }, { firstName: q2, lastName: r2 }] = student
console.log(q1)
console.log(r1)
console.log(q2)
console.log(r2)


// program 7

let info1 = {
    firstName: "chinmay",
    lastName: "deshpande",
    skills: ["python", "js"]
}

let { firstName: q11, lastName: lnn, skills: [l1, l2] } = info1
console.log(l1)
console.log(l2)

let student1 = [
    {
        firstName: "chinmay",
        lastName: "deshpande",
        age: 34,
        skills: ["sql"]
    },
    {
        firstName: "poorva",
        lastName: "vyas",
        age: 29,
        skills: ["javascript", "django", "cpp"]
    },
    {
        firstName: "amol",
        lastName: "rao",
        age: 32,
        skills: ["python", "javascript", "sql", "power BI"]
    },
    {
        firstName: "amit",
        lastName: "bhure",
        age: 28,
        skills: ["python", "jquery"]
    }

]
console.log(student1[0].firstName)
// print all firstName 