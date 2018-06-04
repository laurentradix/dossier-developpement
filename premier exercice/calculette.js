var nombre1 = prompt("entrer un premier nombre");
var nombre2 = prompt("entrer un deuxième nombre");
nombre1 = parseInt(nombre1);
nombre2 = parseInt(nombre2);
// console.log(typeof nombre1);
var resultat= nombre1 + nombre2;

var op1 = prompt("choisir l'\ operateur");

if(op1 == "+")
{resultat= nombre1 + nombre2;
}
else if( op1 == "-") 
{resultat = nombre1 - nombre2;
}
else if(op1 == "*") 
{ resultat = nombre1 * nombre2;
}
else if(op1 == "/") 
{resultat = nombre1 / nombre2;
}

document.write(resultat);