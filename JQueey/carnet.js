"use strict";
console.log("chargé");

//afficher la formulaire
var clic = $(".clickOn");
console.log(clic);

$(clic).click(function() {
	console.log("click");
	$( "div").show();
});













// //ajouter au carnet le contact//

// var firstName ={};

// firstName.products = [];

// firstName.addFirstNames = function(firstName){
  
//   var firstNamesList;
  
//   var firstNamesListJSON = localStorage.getItem('firstNamesList');

//   if (firstNamesListJSON == null) {
  	
//   	firstNamesList = [];
 
//   } else {
  	
//   	firstNamesList = JSON.parse(firstNamesListJSON);
//   }

// 	firstNamesList.push(firstName);
// 	console.log(firstName);
	
// 	firstNamesListJSON = JSON.stringify(firstNamesList);
	
// 	localStorage.setItem('firstNamesList',firstNamesListJSON);

// }

// firstName.displayList = function(){

// 	var displayListJSON = localStorage.getItem("firstNamesList");
	
// 	displayListJSON = JSON.parse(displayListJSON);

// 	for (var i = 0; i < displayListJSON.length; i++) {
		
// 		console.log(displayListJSON[i]);
// 	}
// }