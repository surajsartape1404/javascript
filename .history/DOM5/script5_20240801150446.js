{/* <h1 id="one" class="two" name="three">SURAJ</h1> */ }

let byTagName = document.querySelector('h1')
console.log(byTagName)

let byId = document.querySelector('#one')
console.log(byId)

let byClass = document.querySelector('.two')
console.log(byClass)

let byName = document.querySelector('h1[name ="three"]')
console.log(byName)


// updating name
// console.log(byName.textContent)
// byName.textContent = "SHUBHAM"
