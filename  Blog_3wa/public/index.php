<?php
include '../services/tools.php';
include '../services/functions.php';


$articlesList = getArticles();
pre($articlesList);



?>
<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
		<link href="https://fonts.googleapis.com/css?family=Amatic+SC|Dosis" rel="stylesheet"> 
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css">
		<link rel="stylesheet" href="../css/main.css">
		<title>Blog</title>
	</head>
	<body>
		<header>
			<h1> <a href="index.php"><i class="fab fa-blogger"></i> Encore un Blog ?! #nonMaisAllo</a></h1>
			<nav><a href="admin.php"><i class="fas fa-cogs"></i> Administrateur !</a></nav>
		</header>
		<main class="container">
			<h2><i class="fas fa-home"></i> Accueil</h2>
				<ul class="post-list">
            		<li class="post">
            			<?php foreach ($articlesList as $article) : ?>
						<h3> <i class='fas fa-hand-point-right'></i>
						<a href='show_post.php?id="<?= $article["id"]?>'><?= $article["title"]?></a></h3>
						<article><?= $article["content"] ?></article>
						<small> Rédigé par <?=$article["firstname"] ?> le <?= $article["created_ad"] ?>  </small>
							
            		    <?php endforeach; ?>		
            			
        			</li>
            
    			</ul>    

		</main>
		<footer>
			
	


		</footer>
	</body>
</html>
