"use strict"

//var nombre1 = nombre1;
//var nombre2 = nombre2;
var result;
//var operation;(DANS CE CAS NE PAS REMETTRE VAR ENSUITE)
// Autre maniere de declarer les var --> var nombre1,nombre2,result,operation;


var nombre1 = prompt("Entrer un premier nombre");
var nombre1 = parseFloat(nombre1);

if (isNaN(nombre1))
{
	alert("Erreur de saisie");
}


while(isNaN(nombre1)){

	nombre1 = prompt("saisissez un nombre");
	var nombre1 = parseFloat(nombre1);


if (isNaN(nombre1))
{
	alert("Erreur de saisie");
}
}


var nombre2 = prompt("Entrer un deuxième nombre");
var nombre2 = parseFloat(nombre2);



if (isNaN(nombre2))
{
	alert("Erreur de saisie");
}

while(isNaN(nombre2))
{

	nombre2 = prompt("saisissez un nombre");
	var nombre2 = parseFloat(nombre2);
	if (isNaN(nombre2))
{
	alert("Erreur de saisie");
}


}

var operation = prompt("Entrer l'operateur +,-,*,/,^,ou en toutes lettres");
operation = operation.toLowerCase();

switch (operation){

	case '+':
	case "plus":
	case "PLUS":
		result = nombre1 + nombre2;
		break;
	case "-":
	case "moins":
	case "MOINS":
		result = nombre1 - nombre2;
		break;

	case '*':
	case "Multipier":
	case "MULTIPLIER":
		result = nombre1 * nombre2;
		break;

	case '/':
	case "diviser":
	case "DIVISER":
		result = nombre1 / nombre2;
		break;

	case '^':
	case "puissance":
	case "PUISSANCE":
		result = nombre1 ** nombre2;
		break;

}
document.write(result);



