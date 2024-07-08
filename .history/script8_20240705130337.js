for (let i = 0; i < original.length; i++) {
    if (!removeDuplicate.includes(original[i])) {
        removeDuplicate.push(original[i])
    }
}
console.log(removeDuplicate)
console.log(removeDuplicate.join(""))