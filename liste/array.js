
var jour=["Lundi",
			"Mardi",
 				"Mercredi",
 					"Jeudi",
 						"Vendredi",
							"Samedi",
								"Dimanche"];
								
var mois=["Janvier",
			"Février",
				"Mars",
					"Avril",
						"Mai",
							"Juin",
								"Juillet",
			"Aout",
				"Septembre",
					"Octobre",
						"Novembre",
							"Decembre"];

// var today= new Date(year);
// console.log(today);

// var madate=today.getDay();
// 	console.log(madate);

// var mois=today.getMonth();
// 	console.log(mois);
// var 

 var année="2018"
// var mois="3"
 var ladate="8"

 var madate=new Date(année,mois,jour)
// console.log(madate)

 var datedujour= new Date();
 var jourindex=datedujour.getDay(4);
 var monthindex=datedujour.getMonth(3);


//console.log(monthindex);
//console.log(mois[monthindex]);
//console.log(jour[jourindex])
//document.write(jour[jourindex],ladate,mois[monthindex],année);
var jour=prompt("Entrer la date du jour");
var mois=prompt("Entrer le mois");
var année=prompt("Entrer l'annee");
var agenda= datedujour+jourindex+monthindex+année;
//var madate=new Date(année,mois,jour)

document.write(agenda);