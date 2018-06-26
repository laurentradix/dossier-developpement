<?php


class ValidationController
{

	public function httpGetMethod(Http $http, array $queryFields)
		{

	       die('get')
	       
	       }


			public function httpPostMethod(Http $http, array $queryFields)
		{

	       $userSession = new userSession();

	       if( ! $userSession-> isConnected()){

	       	$http -> redirectTo('login');
	       
	       }

	       
	       $product = cart::getProductswithQuantity();

	       $orderId = OrderModel::createOrderFromCartProducts($products,$userSession->getUserId());
	       
	       Cart::reset();

	       $http-> redirectTo('payment id ='. $orderId);
	
	}

}
