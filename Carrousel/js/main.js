"use strict";


$('.btn-show-buttonSlider').on('click', function () {

	$('.buttonSliders').toggle();
});



// avance d'image

var counter = 0;

displayImage(counter);


$('.forward').on('click', function(){
	
	counter++;
	
	if  (counter == imagesList.length){

		counter = 0;
	}

	displayImage(counter);
});


//retour image

var counter = 0;

displayImage(counter);


$('.backward').on('click', function(){
	
	counter--;
	
	if  (counter < 0){

		counter = imagesList.length -1;
	}

	displayImage(counter);
});



// aleatoire

var counter = 0;

displayImage(counter);


$('.random').on('click', function(){


	defil = Math.floor(Math.random() * imagesList.length +1);
	
	
	displayImage(counter);
});



// play
var app.Interval

var counter = 0;

displayImage(counter);


$('.play').on('click', function(){

if
	play= setInterval(function(){
		next();
	
	},1000);
	
	
	
});
   displayImage(counter);
