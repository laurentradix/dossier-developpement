<?php

/**
* 
*/
class Heros
{
	public $name;
	public $life;
	public $armor;
	function __construct($name,$life, $armor) {
		
		$this->name = $name;
		$this->life = $life;
		$this->armor = $armor;

	}
	
	function hello() {
		echo "Hello, je suis " . $this->name . "\n";
	}
	
	function life() {
		echo " J'ai " . $this->life . " de vie "\n";
	
	}

	function armor() {
		echo "J'ai " . $this->armor . " armure "\n";
	}
}

$Hero1 = new Heros('superman',50,30);
$Hero2 = new Heros('darkvador',20,30);

$Hero1 -> hello();
$Hero2 ->  hello();