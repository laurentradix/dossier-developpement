<?php

function getDb (){
	$user = 'root';
	$password = 'troiswa';
	$db =new PDO(
		'mysql:host=localhost;dbname=blog', 
		$user, 
		$password,
		array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING)
		);
	$db->exec('SET NAMES UTF8');
	return $db;
}


function getArticles(){
	$db = getDb();
	$sql = "SELECT *
	FROM articles
	JOIN  author ON articles.author_id = author.id
	ORDER BY created_ad DESC";

	$statement = $db->prepare($sql);

	$statement->execute();
	$articlesList = $statement->fetchAll(\PDO::FETCH_ASSOC);
	return $articlesList; 

}


// define('perso_FILE_NAME', '../database/perso');


// function addperso($perso) {

// 	file_put_contents(perso_FILE_NAME, $perso . "\n", FILE_APPEND);

// }

// function removeperso($id) {

// 	$persos = getpersoList();

// 	unset($persos[$id]);

// 	file_put_contents(perso_FILE_NAME, $persos);
// }


// function addPerso($perso){
	// $handle = fopen('../database/perso.csv','a');

	// fputcsv($handle,$perso,',');

	// fclose($handle);

// }



