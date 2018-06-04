<?php

include '../services/tools.php';
include '../services/taskService.php';


$id = $_GET['id'];

removeTask($id);

header('Location: index.php');
