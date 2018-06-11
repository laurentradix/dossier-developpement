
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Encore un Blog ?! #nonMaisAllo</title>
<?php
include '../services/tools.php';
include '../services/functions.php';



$articlesList = getArticles();
pre($articlesList);

?>
    <!-- Feuilles de style externes -->
    <link rel="stylesheet" href="css/normalize-3.0.3.min.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans">

    <!-- Feuilles de style de l'application -->
    <link rel="stylesheet" href="../css/main.css">
    
</head>
<body>
    <!-- En-tête commune de l'application -->
    <header class="blog-header">
        <h1><a href="index.php"><i class="fa fa-microphone"></i> Encore un Blog ?! #nonMaisAllo</a></h1>
        <nav>
            <a href="admin.php"><i class="fa fa-cogs"></i> Administration</a>
        </nav>
    </header>

    <main>
        <!-- Chargement du template PHTML spécifié par le programme PHP -->
        <!-- Page d'article de blog détaillé avec les commentaires -->
<h2><i class="fa fa-file-text-o"></i> Article</h2>

<!-- Article du blog -->
<section class="post">
    <h3>Quentin</h3>
    <article>j'ador les math</article>
    <small>
        Rédigé par John Doe        le 2018-06-08 15:11:46    </small>
</section>

<hr>

<!-- Liste des commentaires de l'article du blog -->
<ul class="comment-list">
            <li class="comment">
            <h4><i class="fa fa-comment"></i> Rédigé par Andre</h4>
            <article>j'adore faire de la moto </article>
        </li>
            <li class="comment">
            <h4><i class="fa fa-comment"></i> Rédigé par qsd</h4>
            <article>qsd</article>
        </li>
    </ul>

<hr>

<!-- Formulaire de saisie d'un nouveau commentaire pour cet article -->
<form class="generic-form" action="add_comment.php" method="POST">

    <!-- Utilisation d'un champ caché pour spécifier à quel article rattacher le commentaire -->
    <input type="hidden" name="postId" value="6">

    <fieldset>
        <legend><i class="fa fa-comment-o"></i> Nouveau commentaire</legend>
        <ul>
            <li>
                <label for="nickName">Pseudo :</label>
                <input type="text" id="nickName" name="nickName">
            </li>
            <li>
                <label class="textarea" for="contents">Commentaire :</label>
                <textarea id="contents" name="contents" rows="5"></textarea>
            </li>
            <li>
                <button class="button button-primary" type="submit">Ajouter</button>
                <a class="button button-cancel" href="index.php">Annuler</a>
            </li>
        </ul>
    </fieldset>
</form>    </main>

    <!-- Pied de page commun de l'application -->
    <footer class="blog-footer">
        <small>Le blog des élèves de la 3W Academy</small>
    </footer>
</body>
</html>