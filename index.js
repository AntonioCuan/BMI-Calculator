let weight = ""
let height = ""

document.getElementById("weight").addEventListener("input", function () {
    weight = document.getElementById("weight").value
    displayBMI()
})

document.getElementById("height").addEventListener("input", function () {
    height = document.getElementById("height").value
    displayBMI()
})

function calculateBMI() {
    if (weight == "" || height == "" || height == 0) {
        return ""
    } else {
        return weight / height**2
    }
}

function displayBMI() {
    document.getElementById("BMI-result").innerText = calculateBMI()
}