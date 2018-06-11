<?php
$articlesList = getArticles();
pre($articlesList);
?>

<?php
include '../services/tools.php';
include '../services/functions.php';
include '../views/header.phtml';
?>


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
