<?php
class Rectangle{
	public $x;
	public $y;
	public $width;
	public $height;
	public $color;

	public function __construct ($width,$height){
		$this->x=20;
		$this->y=30;
		$this->color='red';
		$this->width= $width;
		$this->height=$height;
	}
	public function draw(){
	$svg = <<<TXT
	
	<rect x="{$this->x}" y="{$this->y}" width="{$this->width}" height="{$this->height}"
	fill= "{$this->color}"/>

TXT;
		return $svg;
	}
	
	function setPosition($x,$y){
		$this->x = $x;
		$this->y = $y;
	}
	
	function setColor($color){
		$this->color= $color;
	}
}