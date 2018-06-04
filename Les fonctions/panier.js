// 1 *creer un panier dans un tableau
// 2 *creer une fonction add item(name) pour ajouter un article 
// 3 *creer une fonction remove item (name) pour retirer un article
// 4 *creer une fonction display cart pour afficher le panier dans une liste

 
 var Cart=[];

 additem("tomate");
 additem("poireaux");
 additem("biere");
 additem('cerise');

// var nomProduit = prompt("saisissez le nom de l'article à ajouter dans le panier");
 additem(nomProduit);


 displayCart(Cart);



 var index = Cart.indexOf("biere");


// var article = prompt("saisissez le nom de l'article à retirer du panier");

 removeitem(article);


 function additem(produit){
 	Cart[Cart.length]= produit;
 }

 function displayCart(additem){
 	console.log(Cart);	
 }

 function removeitem(article){
 	Cart.splice=(index, 2);
 }

function displayCart(removeitem){
 	console.log(Cart);	
 }



//Correction exercice panier


var cart = [];

addItem("tomate");
addItem("pomme");

displayCart();


addItem('carottes');

removeItem("tomate");

displayCart();


function addItem(produit) {

	cart.push(produit);

}

function removeItem(produit) {

	var index = cart.indexOf(produit);
    
    if (index < 0) {
    	console.log("le produit n'existe pas dans le panier ");
    } else {	
        cart.splice(index, 1);
    }
}


function displayCart() {

	document.write('<ul>');
    
    
    for (var i = 0; i <  cart.length; i++){
    
    	document.write("<li>" + cart[i] + "</li>")
    }
    
    
    document.write('</ul>');

}	



















// Declarer une fonction


function calculTVA(){
	console.log("-");
}
console.log(calculTVA);


var calculTVA = function(){
}
// 2 façon de creer une fonction,la deuxieme est la plus utilisée.


var calculTVA = function(){

var montantTTC = montantht*(1+0.2);
return montantTTC;
}
var prixttc = calculTVA(100)

console.log(prixttc);


