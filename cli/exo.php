<?php
// echo 'bonjour';
// $bonjour = 'bonjour tout le monde';
// // echo $bonjour;
// $pi = 3.14;
// // echo $pi;
// $prixht = 20;
// $prixttc = $prixht +($prixht*0.2);
// // echo $prixttc;
// $dayofweek = [];
// // print_r($dayofweek);
// // var_dump($dayofweek);
// $days[]= "lundi";
// $days[] = "mardi";
// // var_dump($days);
// $days[1000] = "mercredi";
// // var_dump($days);
// $days['nom'] = 'Laurent';
// // var_dump($days);
// 
function translate($word){
	// include_once "dico.php";
	
	$dico=[];
	$dico["bonjour"]= "hello";
	$dico["Au revoir"]= "bye";
	$dico["voiture"]= "car";
	$dico["velo"]= "bike";
	$dico["moto"]= "motobike";
	$dico["bateau"]= "boat";

}	
	if (isset($dico[$word)== false){
		return "  le mot n'est repertorié";
	} else{
		
		$mot = $dico[$word];
		return " la traduction est ". $mot ;
	}
}
	echo  translate("bateau");

