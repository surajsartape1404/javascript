// rest operator

function addAll(...arr){
    console.log(arr)
    return arr.reduce(function(acc,el){
        return el + acc
    },0)
}
let q