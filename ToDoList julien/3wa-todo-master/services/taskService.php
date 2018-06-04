<?php

define('TASK_FILE_NAME', '../database/task');

function getTaskList() {
	
	$tasks = file('../database/task');
	$tasks = file(TASK_FILE_NAME);

	return $tasks;
}

function addTask($task) {

	file_put_contents(TASK_FILE_NAME, $task . "\n", FILE_APPEND);

}

function removeTask($id) {

	$tasks = getTaskList();

	unset($tasks[$id]);

	file_put_contents(TASK_FILE_NAME, $tasks);
}