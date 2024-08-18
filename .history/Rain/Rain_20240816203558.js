let nbDrop = 858:
function randRange(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
}
function createRain() {
    for (let i = 1; i < nbDrop; i++) {
        let dropLeft = randRange(0, 1600);
        let dropTop = randRange(-1000, 1400);
        document.querySelector('.rain').
        
    }
}