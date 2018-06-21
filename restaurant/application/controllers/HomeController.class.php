<?php

class HomeController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {   

       

        $productList = ProductModel::getAllProducts();

        return ['products' => $productList];
    }
}