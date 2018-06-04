
var Cart = {};


cart.addProduct = function (product) {

	
	var productList;
	var productListJSON = localStorage.getItem('productList');
    
    if (productListJson == null) {
    
    	productList = [];
    		
    } else {
    
    	productList = JSON.parse(productListJson);
        // transforme le JSON en JS
    }
    
    
    productList.push(product);
    
    productListJSON = JSON.stringify(productList);
    // converti la variable en chaine de caractere
    
    localStorage.setItem('productList', productListJSON);

}


cart.displayCart = function () {

