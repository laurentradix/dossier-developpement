"use strict";

function displayImage(indexImage){
	console.log('displayImage', indexImage);

	var image = imagesList[indexImage];

	$('.slideShow-container img').attr('src',image.files);

	$('.slideShow-container h3').html(image.title);
	
}


function next{
		app.counter++;

		if (app.counter == imageList.length) {
			app.counter = 0;
		}};

	















        