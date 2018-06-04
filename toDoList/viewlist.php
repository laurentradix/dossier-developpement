<!DOCTYPE html>
<html>
<head>
	<title>toDoList</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="list.css">
</head>
<body>
	<h1>Liste de taches a effectuer</h1>
	
	<button><a href="">Recharger la page</a></button>
	
	<ul>
		<li>faire les courses<button <a href=""></a>Supprimer la tâche</button></li>
		 	
		<li>faire le ménage<button <a href=""></a>Supprimer la tâche</button></li>
			
	
		<li>
			<?php
				$tasks = file('list.txt');

			foreach ($tasks as $id => $value) {
				
				echo "<li>";
				echo $value;  
				echo '<a href="removetask.php?id='. $id. '">supprimer la tâche</a>';
				echo "</li>";
			}
				echo "<pre>";
			?>
		</li>
	</ul>

	<form method= "post" action="addtask.php">
	<input type="text" name="addtask" placeholder="tache">
	<button>Ajouter une tâche</button>
	</form>

</body>
</html>