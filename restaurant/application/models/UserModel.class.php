<?php

class UserModel{
	
	public function getAllUser(){
		
		$db= new Database();
		$sql ="SELECT * FROM user";
		$users = $db->query($sql);

		return $users;
	}
}