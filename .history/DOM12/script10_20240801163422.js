let inputT = document.querySelector('input')
let Ullist = document.querySelector('ul')
let buttonA = document.querySelector('button')

buttonA.addEventListener('click', function () {
    let fruitN = inputT.value
    let newE = document.createElement('li')
    newE.textContent = fruitN
})