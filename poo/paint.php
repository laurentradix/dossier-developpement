<?php
include 'classes/rectangle.php';
include 'classes/circle.php';
include 'classes/ellipse.php';
include 'classes/square.php';


$rect = new Rectangle(90,50);
$rect ->setPosition(20,10);
$rect -> setColor("red");

$rect2 = new Rectangle(100,60);
$rect2->setPosition(50,40);
$rect2->setColor("green");

$circle = new Circle(70);
$circle ->setPosition(150,150);
$circle -> setColor("blue");


$Ellipse = new Ellipse (100,50);
$Ellipse->setPosition(180,180);
$Ellipse-> setColor("purple");

$Square = new Rectangle(70,70);
$Square->setPosition(120,200);
$Square->setColor("orange");

?>

<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>Dessiner des formes</title>
</head>
<body>
	<h1>Je peint en svg</h1>

	<svg style="border:2px solid purple;  width="500" height="400">
		
		<?=$rect->draw()?>
		<?=$rect2->draw()?>
		<?=$circle->draw()?>
		<?=$Ellipse->draw()?>
		<?=$Square->draw()?>

 	</svg>
	
</body>
</html>

