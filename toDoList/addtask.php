<?php

$tache = $_POST['addtask'];


function addtask($tache){
	file_put_contents("list.txt","\n",FILE_APPEND);
	file_put_contents("list.txt",$tache,FILE_APPEND);
}
addtask($tache);

header('location:viewlist.php');
