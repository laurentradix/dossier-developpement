<?php

class Cart{

	static function init(){

		if (empty($_SESSION['cart'])){

				$_SESSION['cart']=[];

		}
	}

	static function add($productId,$quantity){

		$cart=$_SESSION['cart'];

		$cart[$productId] = ['id'=>$productId,"quantity"=> $quantity];
		
		$_SESSION['cart']=$cart;
	}

	static function remove($productId) {
		$cart = $_SESSION['cart'];

		unset($cart[$productId]);
		
		$_SESSION['cart'] = $cart;	
	}

	static function getProductsWithQuantity(){

		$cartList = $_SESSION['cart'];
		
		$productList= [];

		foreach ($cartList as $item){
				
			$productId= $item['id'];
			$quantity = $item['quantity'];

			$product = ProductModel::getProductById($productId);

			$product['quantity'] = $quantity;

			$productList[] = $product;
		} 

		return $productList;
	}

}