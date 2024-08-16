let ulList = document.querySelector('ul')
let inputE = document.querySelector('input')
let buttonOne = document.querySelector('#one')

buttonOne.addEventListener('click', function () {
    let fruitText = inputE.value
    let newLi = document.createElement('li')
    newLi.textContent = fruitText
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputE.value = " "

})

ulList.addEventListener('click', function (event) {
    // console.log(event.target)
    // console.log(event.target.tagName)
    //console.log(event.target.className)
    if (event.target.tagName == "BUTTON") {
        if (event.target.className == "remove") {
            // statements
        }
        else if (event.target.className == "up") {
            // statements
        }
        else if (event.target.className == "down") {
            // statements
        }
    }

})


function createButtons(li) {
    let r = document.createElement('button')
    r.textContent = "Remove"
    r.classList.add('remove')
    li.append(r)

    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.append(u)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.append(d)



}