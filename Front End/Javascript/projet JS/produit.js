/*Définissez une variable products qui est un objet avec des propriétés qui correspondent aux noms de produits et des
valeurs qui sont les prix de chaque produit. Par exemple :
{
"chaussures de sport": 49.99,
"pantalon": 29.99,
"chemise": 15.99
}
2. Définissez une fonction getProductPrice qui prend en entrée un nom de produit et qui renvoie son prix. Utilisez la
variable products pour accéder au prix du produit.
3. Définissez une fonction getProductInfo qui prend en entrée une liste de noms de produits (une chaîne de caractères
séparée par des virgules) et qui renvoie une chaîne de caractères avec le nom de chaque produit suivi de son prix. Utilisez
la fonction getProductPrice pour obtenir les prix de chaque produit. Par exemple, si la liste de produits est
"chaussures de sport, pantalon, chemise" , la fonction doit renvoyer "Les chaussures de sport coûtent
49.99€, le pantalon coûte 29.99€ et la chemise coûte 15.99€."
4. Définissez une fonction getTotalPrice qui prend en entrée une liste de noms de produits (sous la même forme que
dans la fonction getProductInfo ) et qui renvoie le prix total de tous ces produits. Utilisez la fonction
getProductPrice pour obtenir les prix de chaque produit.
5. Définissez une fonction applyDiscount qui prend en entrée un prix et un taux de réduction (en pourcentage) et qui
renvoie le prix après application de la réduction. Par exemple, si le prix est de 100€ et que le taux de réduction est de 10%,
la fonction doit renvoyer 90€.
6. Modifiez la fonction getProductInfo pour qu'elle utilise la fonction applyDiscount pour appliquer un taux de
réduction de 10% sur les prix de chaque produit si le prix de ce produit est supérieur à 50€. Utilisez une condition if
pour vérifier si le prix d'un produit est supérieur à 50€.
7. Modifiez la fonction getTotalPrice pour qu'elle utilise la fonction applyDiscount pour appliquer un taux de réduction
de 10% sur le prix total si ce prix est supérieur à 50€. Utilisez une condition if pour vérifier si le prix total est supérieur à
50€.
8. Définissez une fonction filterByPrice qui prend en entrée une liste de noms de produits et un prix maximum et qui
renvoie une liste de noms de produits qui ont un prix inférieur ou égal au prix maximum donné. Utilisez la fonction
getProductPrice pour obtenir les prix de chaque produit et utilisez une boucle for pour parcourir la liste de produits.
9. Modifiez la fonction getProductInfo pour qu'elle utilise la fonction filterByPrice pour ne prendre en compte que
les produits qui ont un prix inférieur ou égal à 50€. Utilisez la fonction filterByPrice en lui passant en entrée la liste de
produits et le prix maximum de 50€.
10. Définissez une fonction addProduct qui prend en entrée un nom de produit et un prix et qui ajoute ce produit à la
variable products . Assurez-vous de mettre à jour la variable products de manière permanente.
11. Définissez une fonction removeProduct qui prend en entrée un nom de produit et qui supprime ce produit de la variable
products . Assurez-vous de mettre à jour la variable products de manière permanente.*/

let products = {
    "chaussures de sport": 49.99,
    "pantalon": 29.99,
    "chemise": 15.99
}

let productList = "chaussures de sport, pantalon, chemise"
let productName = "chaussures de sport, pantalon, chemise"
let ProductPrice = [49.99, 29.99, 15.99]

function getProductPrice(productName) {
    return products[productName]
}

function getProductInfo(productList) {
    let productListArray = productList.split(", ")
    let message = ""
    for (let i = 0; i < productListArray.length; i++) {
        message += "Les " + productListArray[i] + " coûtent " + getProductPrice(productListArray[i]) + "€"
        if (i < productListArray.length - 1) {
            message += ", "
        }
    }
    return message
}

function getTotalPrice(productList) {
    let productListArray = productList.split(", ")
    let totalPrice = 0
    for (let i = 0; i < productListArray.length; i++) {
        totalPrice += getProductPrice(productListArray[i])
    }
    return totalPrice
}

function applyDiscount(price, discount) {
    return price - price * discount / 100
}

function filterByPrice(productList, priceMax) {
    let productListArray = productList.split(", ")
    let filteredProductList = []
    for (let i = 0; i < productListArray.length; i++) {
        if (getProductPrice(productListArray[i]) <= priceMax) {
            filteredProductList.push(productListArray[i])
        }
    }
    return filteredProductList
}

function addProduct(productName, price) {
    products[productName] = price
}

function removeProduct(productName) {
    delete products[productName]
}

console.log(getProductPrice(pantalon))