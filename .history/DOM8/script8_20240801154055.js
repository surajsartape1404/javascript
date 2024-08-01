{/* <h1>SURAJ</h1> */ }

let headOne = document.querySelector('h1')
let buttonC = document.querySelector('button')

buttonC.addEventListener('click', function () {
    headOne.style.color = "red"
    headOne.style.background = "pink"
    headOne.textContent = headOne.textContent.toUpperCase()
})
