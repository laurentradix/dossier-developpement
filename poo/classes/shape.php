<?php

abstract class Shape {
	

	public $x=0;
	public $y=0;
	public $color=black;
	public $opacity=1;
	
	

	function setPosition($x,$y){
		$this->x = $x;
		$this->y = $y;
	}
	
	function setColor($color){
		$this->color= $color;
	}
	function setOpacity($opacity){
		$this->color= $opacity;
	}
}
