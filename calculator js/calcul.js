"use strict";

// console.log("le fichier js est chargé");


var button1 = document.querySelector(".add");
var button2 = document.querySelector(".soust");

console.log(button1,button2);

function addition(){
	var input1 = document.querySelector(".input1");
	var nb1 = parseFloat(input1.value);
	
	var input2 = document.querySelector(".input2");
	var nb2 = parseFloat(input2.value); 
	
	var sumplus = nb1 + nb2;
	
	var resultad = document.querySelector(".resultad span");
	resultad.innerHTML = sumplus;

}


button1.addEventListener('click',addition);

function soustraction(){
	var input1 = document.querySelector(".input1");
	var nb1 = parseFloat(input1.value);
	
	var input2 = document.querySelector(".input2");
	var nb2 = parseFloat(input2.value); 
	
	var summoins = nb1-nb2;
	
	var resultsou = document.querySelector(".resultsou span");
	resultsou.innerHTML = summoins;
}



button2.addEventListener('click',soustraction);





// /* correction julien*/

// var btnAdd = document.querySelector("#btn-add");

// btnAdd.addEventListener('click', onClickAdd);

// function onClickAdd() {

// 	var input1 = document.querySelector("#input1");
//     var input2 = document.querySelector("#input2");
    
//     var nb1 = parseFloat(input1.value);
//     var nb2 = parseFloat(input2.value);
    
//     var sum = nb1 + nb2;
    
//     var spanAddition = document.querySelector("#result-box .result-addition span");
    
//     spanAddition.innerHTML = sum;
// }

// var btnSoustraction = document.querySelector("#btn-soustraction");

// btnSoustraction.addEventListener('click', onClickSoustraction);

// function onClickSoustraction() {

// 	var input1 = document.querySelector("#input1");
//     var input2 = document.querySelector("#input2");
    
//     var nb1 = parseFloat(input1.value);
//     var nb2 = parseFloat(input2.value);
    
//     var result = nb1 - nb2;
    
//     var spanSoustraction = document.querySelector("#result-box .result-soustraction span");
    
//     spanSoustraction.innerHTML = result;
// }