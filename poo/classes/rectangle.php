<?php

class Rectangle extends Shape{
	
	
	public function __construct ($width,$height){
		
		$this->width= $width;
		$this->height=$height;
	}
	
	
	public function draw(){
	$svg = <<<TXT
	
	<rect x="{$this->x}" y="{$this->y}" width="{$this->width}" height="{$this->height}"/>

TXT;
		return $svg;
	}
}