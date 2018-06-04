function bonjour(){
	console.log("bonjour tout le monde	");
}



bonjour("bob");
bonjour("Pierre");
bonjour("beatrice");
bonjour("martin");
bonjour("julien");
bonjour("virginie");

var tableau=[ "a","b","c","d","e","f","g","h","i","j"];

for (var i = 0; i < 10; i++) {
	bonjour(tableau[i])
};


function bonjour(name){
	console.log("bonjour" + " " + name);
}

 function calculePrixAvecRemise(prix){
 	var remise = prix -(5);
 	return remise;
 }
 	
 	function pricesold(prix){

 		var sold = prix - (prix*(25/100));
 		return sold;
 	}

 	var prixini=600;
	var newprice = pricesold(prixini);


console.log("le prix est " + " " +  newprice + " " + "au lieu de" + " " + prixini);

	var prixini=300;
	var newprice = calculePrixAvecRemise( prixini);

	console.log("le prix est " + " " +  newprice + " " + "au lieu de" + " " + prixini);

	prixini = 546;
	newprice = calculePrixAvecRemise (prixini);
	
	console.log("le prix est " + " " +  newprice + " " + "au lieu de" + " " + prixini);
