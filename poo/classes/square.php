<?php

class Square extends Rectangle{
	
	public $width;
	public $height;
	

	public function __construct ($width,$height){
		
		$this->width= $width;
		$this->height=$height;
	}
	
	public function draw(){
	$svg = <<<TXT
	
	<square x="{$this->x}" y="{$this->y}" width="{$this->width}" height="{$this->height}"/>

TXT;
		return $svg;
	}
	
	
}