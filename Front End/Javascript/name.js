
let taille = parseInt(prompt("Entrer le nombre de noms: "))
let tableau = []
let message = ""

if (taille > 3) {
    alert("C'est beaucoup de noms !")
}

for (let i = 0; i < taille; i++) {
    tableau[i] = prompt("Entrer un nom: ")
    message += tableau[i] + " "
    alert(tableau)
}

function afficheTableau(tableau) {
    for (let i = 0; i < taille; i++) {
        console.log(tableau[i]) 
    }
}

afficheTableau(tableau)

