
'use strict'; 

var nbtaches;

do {
	nbtaches = prompt("Entrer le nombre de tâches a executer");

	nbtaches = parseInt(nbtaches);


} while (isNaN(nbtaches));
	
var taches = [];

for (var i = 0; i < nbtaches; i++){

	taches[i] = prompt(" Quelle taches voulez vous effectuer aujourd'hui ?");

}

document.write(taches);

//console.log(taches);
