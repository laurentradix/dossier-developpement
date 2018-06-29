<?php

$app->get('/',function()use($app){
	
	return $app['twig']->render('home.twig',array(
		
		'name'=>"RADIX",
		
		'firstname'=>"LAURENT"
		));