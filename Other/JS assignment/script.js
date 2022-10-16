// Question 1
const today = new Date()
let date = today.getFullYear() + "-" + (today.getMonth() +1) + "-" + today.getDate()
let time = today.getHours() + ":" + today.getMinutes()

document.getElementById("DateShower").innerHTML = date
document.getElementById("TimeShower").innerHTML = time

// Question 2
Img_1_position = Img_1 = document.getElementById("Img-Link-1")
Img_1 = document.getElementById("Img-Link-1").style
Img_1.backgroundImage = "url(https://images.unsplash.com/photo-1665761126108-f30888596c53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)"

Img_1_position.addEventListener("mouseenter", () => {
    Img_1.backgroundImage = "url(https://images.unsplash.com/photo-1664575599730-0814817939de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)"
})

Img_1_position.addEventListener("mouseleave", () => {
    Img_1.backgroundImage = "url(https://images.unsplash.com/photo-1665761126108-f30888596c53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)"
})

// Question 3
list_text = ["See? Text has been changed", "Do you like my text?", "Now You See Me"]
Click_text = document.getElementById("Clickable-Text")
list_count = list_text.length

let count_number_1 = 0
Click_text.addEventListener("click", () => {
    Click_text.innerText = list_text[LoopText()]
})

function LoopText() {
    count_number_1++
    if (count_number_1 >= list_count) {
        count_number_1 = 0
    }
    return count_number_1
}

// Question 5
let button_Three_Change = document.getElementById("Button-Three-Change")
let letText_Three_Change = document.getElementById("Text-Three-Change")

button_Three_Change.addEventListener("click", () => {
    letText_Three_Change.style.backgroundColor = "blue"
    letText_Three_Change.style.fontFamily = "Arial"
    letText_Three_Change.style.textAlign = "center"
    letText_Three_Change.style.marginLeft = "0"
})

// Question 6
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    return (valNum-32)/1.8;
  }

let Celsius = document.getElementById("Celsius").innerHTML = temperatureConverter(20) + " ℃";


// Question 7
let getNum1 = 0
let getNum2 = 0

function num1(n1) {
    getNum1 = n1
    add(getNum1,getNum2)
}

function num2(n2) {
    getNum2 = n2
    add(getNum1,getNum2)
}

function add(num1, num2) {
    let n1 = parseInt(num1)
    let n2 = parseInt(num2)
    document.getElementById("Add-Count").innerHTML = n1 + n2
}

// Question 8
let getName1 = ""
let getName2 = ""

function name1(n1) {
    getName1 = n1
    document.getElementById("First-Name").innerHTML = getName1
}

function name2(n2) {
    getName2 = n2
    document.getElementById("Last-Name").innerHTML = getName2
}