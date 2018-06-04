"use strict";
console.log ("fichier chargé");

// var cart = {};

// cart.products= [];

// cart.addProduct = function(product){
	
// 	this.products.push(product);
	
// 	localStorage.setItem("product",[]);
	
// }
// cart.addProduct ("tomate");

// document.write(cart.products);






var cart = {};
cart.products= [];


cart.addProduct = function (product) {

	
	var productList;
	var productListJSON = localStorage.getItem('productList');
    
    if (productListJSON == null) {
    
    	productList = [];
    		
    } else {
    
    	productList = JSON.parse(productListJSON);
    }
    
    
    productList.push(product);
    
    productListJSON = JSON.stringify(productList);
    
    localStorage.setItem('productList', productListJSON);

}


cart.displayCart = function () {
	
	var displayCartJSON = localStorage.getItem("productList");
	
	displayCartJSON = JSON.parse(displayCartJSON);
	
	for (var i=0; i< displayCartJSON.length; i++){
		
		console.log (displayCartJSON[i]);	
	}
	



}

cart.addProduct("cerise");
cart.addProduct("ananas");
cart.addProduct("salade");
cart.displayCart();

























