Dans models/ProductModel.class.php

class ProductModel {

  public function getAllProducts() {

    $db = new Database();

    $sql = "SELECT * FROM Meal";
    $products = $db->query($sql);

    return $products;
  }
}


Dans controllers/test/TestController.php


class TestController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
      /*
       * Méthode appelée en cas de requête HTTP GET
       *
       * L'argument $http est un objet permettant de faire des redirections etc.
       * L'argument $queryFields contient l'équivalent de $_GET en PHP natif.
       */

        $productModel = new ProductModel();

        $productList = $productModel->getAllProducts();

        return ['name' => 'toto', 'products' => $productList];
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
      /*
       * Méthode appelée en cas de requête HTTP POST
       *
       * L'argument $http est un objet permettant de faire des redirections etc.
       * L'argument $formFields contient l'équivalent de $_POST en PHP natif.
       */
    }
}


Dans www/test/TextView.phtml

<h2>Page de test</h2>

<?php
print_r($products);
?>


<a href="<?= $requestUrl ?>/register">Créer son compte</a>

<script src="<?= $wwwUrl ?>/js/main.js"></script>
