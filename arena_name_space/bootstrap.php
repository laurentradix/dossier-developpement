<?php

function myAutoLoad($classname){

	$classpath = str_replace('\\',"/", $classname);

	echo $classpath;

	include $classpath . ".php";
}

spl_autoload_register('myAutoLoad');