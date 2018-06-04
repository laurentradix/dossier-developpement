<?php

// Exercice n°1 en php.


// echo ("je suis chargé");
// echo ("<br>");
// echo ("<br>");
// echo("<strong>");
// echo(" bonjour Bob");
// echo ("<br>");
// echo(" bonjour Joe");
// echo("</strong>");œœœœœœœœœœœœœœœœœœœœœœœœw
// echo ("<br>");
// echo(" bonjour Averell");
// echo ("<br>");
// echo ("<br>");

// print_r($_GET);
// echo ("<br>");
// echo ("<br>");
// $ville= $_GET["ville"];
// echo $ville;
// echo ("<br>");
// echo ("<br>");


// $temperature = [];
// $temperature["Annecy"]= -10;
// $temperature["lyon"]= 26;
// $temperature["Bourg en Bresse"]= 20;
// print_r($temperature [$ville]) ;









// correction julien

$temperatures = []; 
// $temperatures = array(); 
$temperatures["nantes"] = 30;
$temperatures["paris"] = 28;
$temperatures["barcelone"] = 35;


// http://localhost/test.php?ville=nantes

print_r($_GET);

var_dump($_GET);

if(isset($_GET["ville"])){
	echo "Vous cherchez la météo de: " .  $_GET["ville"];

	$ville =$_GET["ville"];

	if(isset($temperatures[$ville])){
		
		$temperature=$temperatures[$ville];

		echo "  la temperature est de " . $temperature. "  degrés";
	
	}else{

		echo "  la temperature n'est pas disponible.";
	}
}else{
	
	echo "Veuillez indiquer la ville dans l'url";
}


echo "<br>";


// Deuxieme façon d ecrire le if



if (isset($_GET["ville"]) == false) {

	echo "Veuillez indique la ville dans l'url";
    exit;
}


$ville = $_GET['ville'];

echo "Vous cherchez la météo de: " .  $ville;


if ( isset($temperatures[$ville]) == false) {
	echo "  la temperature n'est pas disponible.";
	exit;
}

$temperature = $temperatures[$ville];

echo "La temperature est de " . $temperature;




