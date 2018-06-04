"use string"
var prixht=100;
const TVA= 0.2;

var remise= prompt("Desirez-vous appliquer une remise?");
var avecRemise=(remise == "yes") || (remise == "oui");


if(avecRemise)
{
document.write("Avec remise<br>");
}
else
{
document.write("Aucune remise ne sera appliquée<br>");
}
var montant=prompt("Saisissez le taux de remise à appliquer");

