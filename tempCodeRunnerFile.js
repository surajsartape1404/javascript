class PersonC {
    constructor(fn, ln, ag) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        // this.displayName = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }

}

PersonC.prototype.displayName = function () {
    console.log(this.firstName + this.lastName)
}

let amol3 = new PersonC("amol3", "rao3", 34)
let amol4 = new PersonC("amol4", "rao4", 34)
console.log(amol3)
console.log(amol4)

amol3.displayName()
amol4.displayName()