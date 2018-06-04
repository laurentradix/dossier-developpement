<?php  //Ce fichier est le Controleur 
include 'model.php';

$str='';



// var_dump($_GET);

if(isset($_GET["villes"])){
	$ville =$_GET["villes"];
	
	$str.= "Vous cherchez la météo de  : " .  $ville;

	if(isset($temperature[$ville])==false){
		$str.= "  la temperature n'est pas disponible.";
	
	}else{
		
		$temper = $temperature[$ville];

		$str.= "  la temperature est de " . $temper. "  degrés";
	
	}
}

include 'view.php';


