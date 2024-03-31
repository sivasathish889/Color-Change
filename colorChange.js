let showboard = document.getElementById("color-id");
let body = document.getElementById("body")
let bgcolor = document.getElementById("bgcolor")
let bghexacolor = document.getElementById("bghexacolor")
let hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", 'F']


// RGB Code generator

function ranNumber1() {
    let randNum1 = Math.floor(Math.random() * 255);
    return randNum1
}

bgcolor.addEventListener('click', () => {

    let number = `rgb(${ranNumber1()}, ${ranNumber1()}, ${ranNumber1()})`;
    showboard.textContent = number
    body.style.backgroundColor = number
})


// Hexa Code

//  Random num generate
function ranNumber() {
    let randomNum = Math.floor(Math.random() * 16)
    return hexCode[randomNum]
}

bghexacolor.addEventListener('click', function () {
    let Hex = "#"
    for (let i = 1; i < 7; i++) {
        Hex = Hex + ranNumber()
    }

    body.style.backgroundColor = Hex
    showboard.innerHTML = Hex
})