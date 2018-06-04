'use strict';
console.log("le fichier index est chargé");

console.log(dragon,hero,gobelin);
console.log(isAlive (dragon));

var result = getRandomInteger(1,10);
console.log(result);



var winner= fightToDeath(hero,gobelin);
console.log(" Premier gagnant " + winner.name);        
console.log("nouveau combat----------------------------------------------")            


var winner2=fightToDeath(winner,dragon);

console.log(" deuxieme gagnant " + winner2.name);












