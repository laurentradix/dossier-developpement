<?php

namespace Monprojet\Controller;

use Silex\Application;

class Monprojet\Controller\HomeController {

	public function main(Application $app){

		$flickersServ = new flickersServices();

		return $app['twig']->render('home.twig',array(
		
		'name'=>"RADIX",
		
		'firstname'=>"LAURENT"
		));
	}
}