// Es6 class 

// Inheritance
class Student {
    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}

class Teacher extends Student {
    salary = 10000
    displaySalary() {
        console.log(this.salary)
    }
}

let amolT = new Teacher("amol", "rao")
console.log(amolT.firstName)
console.log(amolT.lastName)
console.log(amolT.salary)
amolT.displayName()
amolT.displaySalary()


// program 2

class Student1 {
    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }

}
class Teacher1 extends Student1 {
    constructor(fn, ln, salary) {
        super(fn, ln)
        this.salary = salary
    }

    displaySalary() {
        console.log(this.salary)
    }
}

let amol = new Teacher1("amol", "rao", 10000)
console.log(amol.firstName)
console.log(amol.lastName)
console.log(amol.salary)

amol.displayName()
amol.displaySalary()
