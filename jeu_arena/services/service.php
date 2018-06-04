<?php

function getDataHero() {

	$handle = fopen('../database/donneeheros.csv','r');

	$heros = [];

	while (true) {

		$hero = fgetcsv($handle, 0, ';');

		if ($hero == false) {
			break;
		}

		$heros[] = $hero;
	}

	fclose($handle);

	return $heros;
}


function addhero($hero){
	
	$handle = fopen('../database/donneeheros.csv','a');
	
	fputcsv($handle,$hero,';');
	
	fclose($handle);

}