// rest operator

function addAll(...arr) {
    console.log(arr)
    return arr.reduce(function (acc, el) {
        return el + acc
    }, 0)
}
let q = addAll(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log(q)