<?php

use Symfony\Component\HttpFondation\Request;

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();

$app['debug']= true;

function hello(Request $request,$id){ 
	
	$message = $request -> get('message');
	return"hello".$message;
}

$app->get('/','Monprojet\Controller\HomeController::main');
->blind('homepage');

$app->get('/hello/{id}', 'hello');

$app->run();













$app->register(new Silex\Provider\TwigServiceProvider(), array('twig.path'=>__DIR__.'/../views',




