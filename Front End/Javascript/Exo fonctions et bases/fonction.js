
var entier = parseInt(prompt("Entrer un nombre: "))
let somme = 0

if (entier%2 == 0 ) {
    alert("Le nombre est pair")
}
else {
    alert("Le nombre est impair")
}

let taille = parseInt(prompt("Entrer la taille du tableau: "))
let tableau = []

for (let i = 0; i < taille; i++) {
    tableau[i] = parseInt(prompt("Entrer un nombre dans la tableau: "))
    alert(tableau)
}

for (let i = 0; i < taille; i++) {
    somme += tableau[i]
    alert(somme)
}


let chaine = prompt("Entrer une chaine de caractère: ")
let chaineInverse = chaine.split("").reverse().join("")
alert(chaineInverse)

