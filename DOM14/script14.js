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

function createButtons(li) {
    let r = document.createElement('button')   // <button></button>
    r.textContent = "Remove"       // <button>Remove</button>
    r.classList.add('remove')      // <button class = "remove">Remove</button>
    li.appendChild(r)

    let u = document.createElement('button')   // <button></button>
    u.textContent = "Up"       // <button>Remove</button>
    u.classList.add('up')      // <button class = "up">Up</button>
    li.appendChild(u)

    let d = document.createElement('button')   // <button></button>
    d.textContent = "Down"       // <button>Remove</button>
    d.classList.add('down')      // <button class = "down">Down</button>
    li.appendChild(d)
}


ullist.addEventListener('click', function (event) {

    //console.log(event.target)
    //console.log(event.target.tagName)
    //console.log(event.target.className)


    if (event.target.tagName == "Button") {

        if (event.target.className == "remove") {

        }
        else if (event.target.className == "up") {

        }
        else if (event.target.className == "down") {

        }

    }

})