
<?php
include 'classes/Rectangle.php';
$rect = new Rectangle(100, 50);
$rect->setPosition(200, 10);
$rect->setColor('red');
$rect2 = new Rectangle(60, 90);
$rect2->setPosition(0, 100);
$rect2->setColor('green');
?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<h1>Painter</h1>
	 
	<svg style="border: 1px solid red" width="400" height="180">
  		<?= $rect->draw() ?>
  		<?= $rect2->draw() ?>
	</svg> 

</body>
</html>
