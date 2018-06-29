// function Hero (name, hp) {
// 	this.hp = hp;
// 	this.name = name;

// 	this.x = 0;
// 	this.y = 0;
// }

// Hero.prototype.strike = function () {
// 	console.log(this.name + " attaque ");
// }

// Hero.prototype.move = function () {
// 	this.x += 50;
// 	this.y += 50;
// }

// Hero.prototype.getPosition = function () {
// 	return {x: this.x, y: this.y};
// }

// var dragonBallZ = new Hero("dragonBallZ", 20);
// var albator = new Hero("albator", 25);
// var superman = new Hero("superman", 25);

// dragonBallZ.strike();
// dragonBallZ.strike();
// superman.move();

// console.log(fafnir);

var canvas = document.querySelector("#canvas");
var dessin = canvas.getContext('2d');

// dessin.fillRect(dragonBallZ.x,dragonBallZ.y,20,20);
// dessin.fillRect(superman.x,superman.y,60,60);


// dragonBallZ.draw();
// superman.draw();

var state ={
	drawing: false,
	currrentLocation:null
};



var x1, y1;

function onMouseMove(event) {
	var x2 = event.clientX;
	var y2 = event.clientY;

	dessin.beginPath();
	dessin.moveTo(x1, y1);
	dessin.lineTo(x2, y2);
	dessin.stroke();

	x1 = x2;
	y1 = y2;
}

canvas.addEventListener('mousedown',function startDrawing(event){

	// console.log('startDrawing');

	x1 = event.clientX;
	y1 = event.clientY;
	
	canvas.addEventListener('mousemove', onMouseMove);

	canvas.addEventListener('mouseup', function () {
		canvas.removeEventListener('mousemove', onMouseMove)

	});

});
	

	
	var rect  = canvas.getBoundingClientRect();
	

	var positionMouse = {

	x: x1 - rect.left,
	y: y1 - rect.top,

}
 
 x=0;

 setInterval(
 	function(){
 		x++
 		dessin.clearRect(0,0,300,300);
 		dessin.fillRect(x,100,50,20);
 		dessin.fillStyle="green";
 		dessin.clearRect(0,0,300,300);
 		dessin.fillRect(x,10,80,20);
 		dessin.fillStyle="purple";
 	}
 ,25);

document.addEventListener('keydown',function(event){

	var keyCode = event.keyCode;
	
	// console.log(event);

	if (keyCode == 40){

		x=-5}
});



