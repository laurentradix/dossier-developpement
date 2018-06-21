<?php

class ProductController

{
  
	public function httpGetMethod(Http $http,array $queryfields){

	  	$productId = $queryfields['id'];
	  	
	  	$product = ProductModel::getProductById($productId);

	  	return['_raw_template'=> true, 'product'=> $product];

  }

}

	