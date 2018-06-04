<?php
$id = $_GET["id"];
function removetask($id){
	$task = file('list.txt');
	unset($task[$id]);
	$newlist= implode("", $task);
	file_put_contents('list.txt',$newlist);
}
removetask($id);

header('location:viewlist.php');