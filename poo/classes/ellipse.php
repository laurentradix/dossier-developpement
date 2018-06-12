<?php

class Ellipse{
	
	public $cx;
	public $cy;
	public $r;
	public $ry;
	public $color;
	

	public function __construct ($r,$ry){
		$this->cx=0;
		$this->cy=0;
		$this->rx=$r;
		$this->ry=$ry;
		$this->color='black';
		
	}
	public function draw(){
	$svg = <<<TXT
	
	<ellipse cx="{$this->cx}" cy="{$this->cy}" rx="{$this->rx}" ry="{$this->ry}"
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



 // <ellipse cx="200" cy="80" rx="100" ry="50"