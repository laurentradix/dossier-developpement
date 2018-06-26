<?php

class OrderModel{
	
	 static function createOrder($products,$userId){


	 	if(empty($products)){

	 		throw new Exception("Products empty");
	 	}

	 	
	 	$sql =
	 			
	 	"INSERT INTO `order` (user_id, status, created_at,)
			
				VALUES		(NOW(),?, "pending")" 
	
	
		
		$db = new Database();

			$orderId = $db->executeSql($sql,[$userId]);

			
			foreach ($products as $product) {
					
			
				$sql ="

					INSERT INTO orderline
								
					(order_id, product_id, priceHT ,quantity)

					VALUES(:order_id, :product_id, :priceHT, :quantity)

					";
					
					$data = [];
					$data['order_id'] = $orderId;
					$data['product_id'] = $product["id"];
					$data['priceHT'] = $product["priceHT"] ;
					$data['quantity'] = $product["quantity"];

					$db->execute($sql,$data);

		}
		return $orderId;
	}
}