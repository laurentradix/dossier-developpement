<?php

class OrderModel{
	
	 static function createOrder($products,$userId){


	 	if(empty($products)){

	 		throw new Exception("product empty");
	 	}
		
		$db = new Database();

			$orderId = $db->execute($sql,[$userId]);

			
			$sql = "INSERT INTO order
							
							(user_id, status, created_at,)
			
				VALUES		(:user_id, :status, :created_at, NOW())";
	}
		

		$db->execute($sql, $userId);

		foreach ($products as $product) {
					
			
				$sql ="INSERT INTO orderline
								
								(order_id, product_id, priceHT ,quantity)

					VALUES		(:order_id, :product_id, :priceHT, :quantity)
									";
					
				
				$data[];
				$data['order_id'];
				$data['product_id'];
				$data['priceHT'];
				$data['quantity']

				$db->execute($sql,$data);

		}
		return $orderId;
	}
}