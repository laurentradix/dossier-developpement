<?php

class CartController
{
   
    public function httpGetMethod(Http $http, array $formFields)
    {
    	
    	$productList = Cart::getProductsWithQuantity();
    	
    	return['productList'=>$productList,'_raw_template'=> true ];
 	}

 	 public function httpPostMethod(Http $http, array $formFields)
    {

    	if(isset($formFields['delete'])){

    		$productId = $formFields['id'];
    		Cart::deleteOneproduct($productId);

    	}else{

    		$quantity = $formFields['quantity]'];
    		$productId =$formFields['id'];

    		Cart::add($productId, $quantity);

    	}

    	// $productId = $_POST['id'];
    	// $quantity = $_POST['quantity'];

    	
    	$productList = Cart::getProductsWithQuantity();
    	
    	return ['productList'=>$productList,  '_raw_template'=> true];
    }


}