<!-- fichier vue -->

<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>meteo en php</title>
	<link rel="stylesheet" type="text/css" href="meteo.css">
</head>
<body>

	<?php
	echo $str;
	?>
	
	<h1>Données Meteo</h1>
	<a href="">recharger la page</a>
	<form method="get"
	action="">	
	<select name="villes">
		<option>Annecy</option>
		<option>Lyon</option>
		<option>Bourg en Bresse</option>
	</select>
	<button>Envoyer</button>
	</form>	
</body>
</html>