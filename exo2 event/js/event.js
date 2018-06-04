"use strict";
console.log("le fichier js est chargé");



var pictures = document.querySelectorAll("img");

for (var i = 0; i< pictures.length;i++){
	var node = pictures[i];
	node.addEventListener("click",selectpic)
}

function selectpic(){
 this.classList.toggle("selected");
 var list = document.querySelectorAll(".selected");
 var nodespan = document.querySelector("span");
 nodespan.innerHTML = list.length;

}





