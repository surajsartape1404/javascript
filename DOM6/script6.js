let headOne = document.querySelector('h1')
let buttonC = document.querySelector('button')

console.log(headOne)
console.log(buttonC)

buttonC.addEventListener('click', function () {
    headOne.textContent = "SHUBHAM"
    headOne.style.color = "green"
    headOne.style.background = "pink"
})




// let info = {
//     fullName: "suraj",
//     parent: {
//         mother: "Bhagyashri Sartape",
//         father: "Dayanand Sartape"
//     }
// }

// info.parent.mother = "Bhagyashri D Sartape"
// info['parent']['mother'] = "Bhagyashri D Sartape"