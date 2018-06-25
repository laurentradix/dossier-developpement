<?php

class ValidationController{
	
	public function httpGetMethod(Http $http, array $queryFields){

	       $orderList = OrderModel::createOrder(); 

	       return['orderList'=> $orderList,'_raw_template'=> true];
	    }

}
