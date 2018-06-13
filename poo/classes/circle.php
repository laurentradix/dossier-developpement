<?php

class Circle extends Shape{
	
	public $cx=0;
	public $cy=0;
	public $r=0;
	
	

	public function __construct (){
		$this->cx=0;
		$this->cy=0;
		$this->r=$r;
		
}
	
	public function draw(){
	$svg = <<<TXT
	
	<circle cx="{$this->cx}" cy="{$this->cy}" r="{$this->r}"/>

TXT;
		return $svg;
	}
}
	
	