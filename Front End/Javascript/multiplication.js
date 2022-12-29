
let nombre = parseInt(prompt("Entrer un nombre entier compris entre 1 et 10: "))
let message = ""

if (nombre < 1 || nombre > 10) {
    alert("Erreur")
}

for (let i = 1; i <= 10; i++) {
    message += nombre + " x " + i + " = " + nombre * i 
    alert(message)
    message = ""
}

