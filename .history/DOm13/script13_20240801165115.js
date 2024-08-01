let inputT = document.querySelector('input')
let Ullist = document.querySelector('ul')
let buttonT = document.querySelector('button')

console.log(inputT)
console.log(buttonT)
console.log(Ullist)

buttonT.addEventListener('click', function () {
    let fruitText = inputT.value
    let newLi = document.createElement('li')
    newLi.textContent = fruitText

})