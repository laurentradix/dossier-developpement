"use strict";
/*créer une constante PI qui contient le nombre 3,14*/
const PI = 3.14;
/*créer une fonction qui calcule le périmètre d'un cercle à partir de son rayon*/
var r = 2;

function peri (PI,r){
	var peri = 2* PI*r;
	return peri;
}
var perimetre = peri(3.14,2)
/console.log("le perimetre est de " + (perimetre));*/

/*créer une variable *text* contenant une chaîne de caractère "Hello"*/
/*afficher le type de la variable *text* dans la console "Le type de la variable text est <type>"*/

var texte="hello";
/*console.log("Le type de la variable text est"+ " " + (typeof texte));*/




/*créer un objet *moi* avec les propriétes *firstname* et *lastname* et *age**/
/*créer une autre objet *bob* avec les mêmes propritétés
créer une fonction qui retourne qui est le plus vieux
afficher dans la page web en gras "Hello <prenom> <nom>"*/

var moi = {};
    moi.surname = "laurent";
    moi.lastname = " radix";
    moi.age = 52;

var bob ={};
    bob. surname = "bob";
    bob.lastname = "Dupont";
    bob.age = 30;
 /*console.log(moi,bob);*/

 function old (pers1, pers2){

 	if (pers1.age > pers2.age) {
 		return pers1;

}   else if(pers2.age>pers1.age){
		return pers2;

}	else{
 		return null;
 		}
 	
 var mostOlder = old(bob,moi);
 	if (mostOlder==null) {
 		console.log("bob et moi avons le meme age");
}
		console.log(old.surname, " est le plus vieux");
}

document.write("<strong>hello" + " " + older.surname + " " + older.lastname +"</strong>");

/*créer un tableau contenant une liste de 5 tâches (chaînes) 
afficher dans une liste html ces 5 tâches*/

var taches = [];
taches.push("aller faire des courses");
taches[taches.length] = "aller au cinéma";
taches.push("aller faire le menage");
taches.push("dejeuner");

function displayTaches(list) {
	
    document.write('<ul>');
    
    
    for (var i = 0; i < list.length ; i++) {
    	document.write("<li>" + list[i] + "</li>");
    	
    }
    
    
    document.write('</ul>');
}


displayTaches(taches);
/*créer une fonction qui reçoit un tableau et afficher le contenu sous forme d'une liste html*/
/*saisie obligatoire d'un nombre (boucle while) + afficher ce nombre dans la console*/
var nb;

do {

	nb = parseFloat(prompt("Saisissez un nombre"));


} while (isNaN(nb));



while (true) {
	
    nb = parseFloat(prompt("Saisissez un nombre"));

	if ( ! isNaN(nb)) {
    	break;
    }
	
}

/*créer une fonction buildPerson(name, surname, age) qui retourn un objet avec les propriétes name, surname*/

function buildPerson(firstname, lastname, age) {
	
    var person = {};
    
    person.firstname = firstname;
    person.lastname = lastname;
    person.age = age;
    
    
	return person;
}


var tom = buildPerson("Tom", "Sawyer", 15);
var averell = buildPerson("Averell", "Dalton", 25);

var joe = buildPerson("Joe", "Dalton", 36);


older = getOlder(averell, joe);


if (older == null) {
    console.log("ils ont le meme age");
} else {
    console.log(older.firstname,  " est le plus vieux");
}

