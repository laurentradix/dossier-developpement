"use strict"

 console.log("fichier function chargé");


function getRandomInteger(min, max){
 	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isAlive(fighter){
	if (fighter.hp > 0){
	return true;
 	} else {
 		return false;
	}
} 

function strike(attacker,defender){
	console.log('le combattant ' + " " + attacker.name + " attaque le combattant " + defender.name);
	var min = attacker.damage.min;
	var max = attacker.damage.max;
	var nb = getRandomInteger(min,max);
	var damage = nb - defender.armor;
	console.log("Le nombre de degats occasionnés " + damage );
	if (damage < 0){
		damage = 0;
	}
	defender.hp = defender.hp - damage;
	
	if (defender.hp <0){
	 	defender.hp=0;
	}
	console.log("Il reste " + defender.hp + " vie à " + defender.name);
}
	
function fightToDeath(fighter1,fighter2){
	
	while (isAlive(fighter1) && isAlive(fighter2)){
		
		strike(fighter1,fighter2);
		strike(fighter2,fighter1);
	}
	
	if (isAlive(fighter1)) {
		return fighter1
	}else{
		return fighter2
	}
}

// correction par julien.


- créer un hero et un dragon
Caractéristiques:
	hp: entier positif
    name: chaîne
    armor: entier positif
    damage: min et max
    
    
- créer la fonction isAlive(person). La fonction retourne un booléen (true ou false)
- tester la fonction


function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min) + min); 
}


- ajouter un fichier functions.js dans le fichier dragonslayer.html
- au début du fichier functions.js, écrire dans la console "Le fichier functions.js est chargé"
- au début du fichier dragonslayer.js, écrire dans la console "le fichier dragonslayer.js est chargé"

créer fichier fighters.js et l'ajouter dans la page web après functions.js
ajouter le message de chargement dans la console



function isAlive(fighter) {
	if (fighter.hp > 0) {
    
    	return true;
    
    } else {
    
    	return false;
    }

}


function strike(attacker, defensor) {

	console.log('strike()', attacker.name, defensor.name);
	
    // nombre aléatoire 
    var min = attacker.damage.min;
    var max = attacker.damage.max;
    
    var nb = getRandomInteger(min, max);
    
    
    //calculer les degats :soustrair l'armure du défenseur
    var damage = nb - defensor.armor;
    
    if (damage < 0) {
    	damage = 0;
    }
    
    console.log(damage + " dégats");
    
    
    // enlever les points de vie au defenseur
    defensor.hp = defensor.hp - damage;
    
    console.log("HP restant " + defensor.hp );

}


function fightToDeath(fighter1, fighter2) {

    var count = 0;

	while(count < 50 && isAlive(fighter1) == true && isAlive(fighter2) == true) {
    	strike(fighter1, fighter2);
        
        if (isAlive(fighter2) {
        	strike(fighter2, fighter1);
        }
        
    	count++;
    }


	if (count >= 50) {
    
    	return null;
    } else if (isAlive(fighter1)) {
    
    	return fighter1;
    } else {
    	return fighter2;
    }
    
}


function drinkMagicPotion(fighter) {

	console.log(fighter.name, 'boit la potion magique');

	fighter.hp = fighter.hp + 100;
    fighter.armor = fighter.armor + 20;
    
}


console.log("combat 1<br>");
var winner = fightToDeath(goblin, hero);

if (winner == null) {
  	console.log("Egalité, on ne peut pas affronter le dragons");
} else {

	console.log("Le gagnant est ", winner.name);

	
    drinkMagicPotion(winner);
    // drinkMagicPotion(dragon);
    
    var champion = fightToDeath(winner, dragon);
	console.log("Le champion est", champion.name);

}










