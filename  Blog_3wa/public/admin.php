<?php
include '../services/tools.php';
include '../services/functions.php';



// $articlesList = getArticles();
// pre($articlesList);

?>


<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Encore un Blog ?! #nonMaisAllo</title>

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
        <h2><i class="fa fa-cogs"></i> Panneau d'administration</h2>

<nav>
    <a href="add_post.php">Rédiger un nouvel article</a>
</nav>

<table>
    <caption>Liste des articles</caption>
    <thead>
        <tr>
            <th>Titre</th>
            <th>Article</th>
            <th>Auteur</th>
            <th>Catégorie</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
                    <tr>
                <td><a href="show_post.php?id=6" target="_blank">Quentin</a></td>
                <td>j'aime les voitures de collections </td>
                <td>bob l'éponge</td>
                <td>voitures</td>
                <td>
                    <a class="edit" href="edit_post.php?id=6"><i class="fa fa-pencil"></i></a>
                    <a class="remove" href="delete_post.php?id=6"><i class="fa fa-remove"></i></a>
                </td>
            </tr>
                    <tr>
                <td><a href="show_post.php?id=4" target="_blank">dzadazd</a></td>
                <td>je veux voyager en voilier </td>
                <td>andre</td>
                <td>voilier</td>
                <td>
                    <a class="edit" href="edit_post.php?id=4"><i class="fa fa-pencil"></i></a>
                    <a class="remove" href="delete_post.php?id=4"><i class="fa fa-remove"></i></a>
                </td>
            </tr>
            </tbody>
</table>    </main>

    <!-- Pied de page commun de l'application -->
    <footer class="blog-footer">
        <small>Le blog des élèves de la 3W Academy</small>
    </footer>
</body>
</html>