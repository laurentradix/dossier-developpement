<?php

include '../services/tools.php';
include '../services/taskService.php';

$task = $_POST['task'];

addTask($task);

header('Location: index.php');