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

// var fafnir = new Hero("fafnir", 20);
// var aragorn = new Hero("aragorn", 25);
// var legolas = new Hero("legolas", 25);

// fafnir.strike();
// aragorn.strike();
// aragorn.move();

// console.log(fafnir);

// var canvas = document.querySelector("#canvas");
// var dessin = canvas.getContext('2d');

// dessin.fillRect(fafnir.x,fafnir.y,20,20);
// dessin.fillRect(aragorn.x,aragorn.y,60,60);


$( document ).ready(function() {
        var canvasDiv = document.getElementById('canvasDiv');
        var canvas = document.createElement('canvas');
        canvas.setAttribute('width', "500");
        canvas.setAttribute('height', "200");
        canvas.setAttribute('id', 'canvas');
        canvasDiv.appendChild(canvas);
        if(typeof G_vmlCanvasManager != 'undefined') {
            canvas = G_vmlCanvasManager.initElement(canvas);
        }
        context = canvas.getContext("2d");
 
        //
        $('#canvas').mousedown(function(e){
            var mouseX = e.pageX - this.offsetLeft;
            var mouseY = e.pageY - this.offsetTop;
             
            paint = true;
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
            redraw();
        });
 
        $('#canvas').mousemove(function(e){
            if(paint){
                addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
                redraw();
            }
        });      
 
        $('#canvas').mouseup(function(e){
            paint = false;
             
        });
 
        $('#canvas').mouseleave(function(e){
            paint = false;
        });
 
        var clickX = new Array();
        var clickY = new Array();
        var clickDrag = new Array();
        var paint;
 
        function addClick(x, y, dragging)
        {
            clickX.push(x);
            clickY.push(y);
            clickDrag.push(dragging);
        }
 
        function redraw(){
            context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
             
            context.strokeStyle = "#333";
            context.lineJoin = "round";
            context.lineWidth = 8;
             
            for(var i=0; i < clickX.length; i++) {       
                context.beginPath();
                if(clickDrag[i] && i){
                    context.moveTo(clickX[i-1], clickY[i-1]);
                }else{
                    context.moveTo(clickX[i]-1, clickY[i]);
                }
                context.lineTo(clickX[i], clickY[i]);
                context.closePath();
                context.stroke();
            }
        }
});
$( document ).ready(function() {
        var canvasDiv = document.getElementById('canvasDiv');
        var canvas = document.createElement('canvas');
        canvas.setAttribute('width', "500");
        canvas.setAttribute('height', "200");
        canvas.setAttribute('id', 'canvas');
        canvasDiv.appendChild(canvas);
        if(typeof G_vmlCanvasManager != 'undefined') {
            canvas = G_vmlCanvasManager.initElement(canvas);
        }
        context = canvas.getContext("2d");
 
        //
        $('#canvas').mousedown(function(e){
            var mouseX = e.pageX - this.offsetLeft;
            var mouseY = e.pageY - this.offsetTop;
             
            paint = true;
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
            redraw();
        });
 
        $('#canvas').mousemove(function(e){
            if(paint){
                addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
                redraw();
            }
        });      
 
        $('#canvas').mouseup(function(e){
            paint = false;
             
        });
 
        $('#canvas').mouseleave(function(e){
            paint = false;
        });
 
        var clickX = new Array();
        var clickY = new Array();
        var clickDrag = new Array();
        var paint;
 
        function addClick(x, y, dragging)
        {
            clickX.push(x);
            clickY.push(y);
            clickDrag.push(dragging);
        }
 
        function redraw(){
            context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
             
            context.strokeStyle = "#333";
            context.lineJoin = "round";
            context.lineWidth = 8;
             
            for(var i=0; i < clickX.length; i++) {       
                context.beginPath();
                if(clickDrag[i] && i){
                    context.moveTo(clickX[i-1], clickY[i-1]);
                }else{
                    context.moveTo(clickX[i]-1, clickY[i]);
                }
                context.lineTo(clickX[i], clickY[i]);
                context.closePath();
                context.stroke();
            }
        }
});