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
var today = new Date();
var dayIndex =today.getDay();
var monthIndex=today.getMonth();
var hourIndex=today.getHours();
var minIndex= today.getMinutes();
var secIndex=today.getSeconds();
var dayFr = jour[dayIndex];
var monthFr= mois[monthIndex];
var dateFr = "Nous somme le: " + dayFr+ " "+ today.getDate()+ " " + monthFr+ " " +
today.getFullYear()+ " il est "+today.getHours()+ "."+ today.getMinutes()+"."+today.getSeconds();
alert(dateFr);
console.log(dateFr);
document.write(dateFr);