<?php

include '../services/tools.php';
include '../services/taskService.php';

$tasks = getTaskList();

include '../views/index.phtml';
