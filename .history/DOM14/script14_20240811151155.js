let ullist = document.querySelector('ul')
let input = document.querySelector('input')
let buttonOne = document.querySelector('#one')

console.log(ullist)
console.log(input)
console.log(buttonOne)

buttonOne.addEventListener('click', function () {
    let vText = input.value
    let newLi = document.createElement('li')
    newLi.textContent = vText
    createButtons(newLi)
    ullist.appendChild(newLi)
    input.value = ""
})