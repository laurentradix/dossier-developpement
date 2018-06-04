<?php
$task = file('list.txt');

foreach ($task as $value) {
	echo "<pre>";
	echo $value;
}

$tache = "";
	file_put_contents("list.txt","\n",FILE_APPEND);

	file_put_contents("list.txt",$tache,FILE_APPEND);
	
	