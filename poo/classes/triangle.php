<?php

class Triangle{
	
	public $point1;
	public $point2;
	public $point3;
	public $color;

	public function __construct($point1, $point2, $point3){
		$this->point1= $point1;
		$this->point2= $point2;
		$this->point3= $point3;
		$this->color='yellow';
		
	}
	public function draw(){
	$svg = <<<TXT
	
	<polygon points="{$this->point1[0]},{$this->point1[1]} {$this->point2[0]},{$this->point2[1]} {$this->point3[0]},{$this->point3[1]} "
	fill= "{$this->color}"/>

TXT;
		return $svg;
	}
	
	
	
	function setColor($color){
		$this->color= $color;
	}
}