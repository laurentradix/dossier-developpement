<?php

class Ellipse extends Shape{
	
	public function __construct (){
		
		$this->cx=0;
		$this->cy=0;
		$this->rx=$r;
		$this->ry=$ry;
	}
	
	public function draw(){
	$svg = <<<TXT
	
	<ellipse cx="{$this->cx}" cy="{$this->cy}" rx="{$this->rx}" ry="{$this->ry}"/>

TXT;
		return $svg;
	}
	
}



 // <ellipse cx="200" cy="80" rx="100" ry="50"