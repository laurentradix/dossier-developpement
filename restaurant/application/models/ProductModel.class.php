<?php

class ProductModel{
	
	 static function getAllProducts(){
		
		$db= new Database();
		
		$sql ="SELECT * FROM product";
		
		$products = $db->query($sql);

		return $products;
	}


	static function getProductById($id) {
		
		$db = new Database();
		
		$sql = "SELECT * FROM product WHERE id = ?";
		
		$params = [$id];
		
		return $db->queryOne($sql, $params);
	}
}

