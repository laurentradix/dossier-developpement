<?php
class Circle{
	public $cx;
	public $cy;
	public $r;
	public $color;
	

	public function __construct ($r){
		$this->cx=0;
		$this->cy=0;
		$this->r=$r;
		$this->color='red';
		
	}
	public function draw(){
	$svg = <<<TXT
	
	<circle cx="{$this->cx}" cy="{$this->cy}" r="{$this->r}"
	fill= "{$this->color}"/>

TXT;
		return $svg;
	}
	
	function setPosition($cx,$cy){
		$this->cx = $cx;
		$this->cy = $cy;
	}
	
	function setColor($color){
		$this->color= $color;
	}
}


//  <svg height="100" width="100">
//   <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
// </svg> 